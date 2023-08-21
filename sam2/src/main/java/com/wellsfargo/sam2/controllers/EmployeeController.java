package com.wellsfargo.sam2.controllers;
import com.wellsfargo.sam2.dto.CustomResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.repository.EmployeeCardDetailsRepository;
import com.wellsfargo.sam2.repository.EmployeeRepository;
import com.wellsfargo.sam2.services.EmailSenderService;
import com.wellsfargo.sam2.services.EmployeeCardDetailsServiceImp;
//
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/employees")
//public class EmployeeController {
//
//    private final EmployeeRepository employeeRepository;
//
//    @Autowired
//    public EmployeeController(EmployeeRepository employeeRepository) {
//        this.employeeRepository = employeeRepository;
//    }
//    
//    @GetMapping
//    public String homei() {
//    	return "api works";
//    }
//    
//    @PostMapping
//    public ResponseEntity<EmployeeMaster> createEmployee(@RequestBody EmployeeMaster employee) {
//        try {
//            EmployeeMaster newEmployee = employeeRepository.save(employee);
//            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
import com.wellsfargo.sam2.services.EmployeeIssueDetailsServiceImp;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
@AllArgsConstructor
public class EmployeeController {

    private final EmployeeRepository employeeRepository;	
    
    @Autowired
	private EmployeeCardDetailsServiceImp empCardDetSerImp;
    
    @Autowired
	private EmployeeIssueDetailsServiceImp issueDetailsService;
    
    @Autowired
    private EmailSenderService senderService;

//    @Autowired
//    public EmployeeController(EmployeeRepository employeeRepository) {
//        this.employeeRepository = employeeRepository;
//    }

    @PostMapping("/add")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeMaster employee) {
        try {
            String iempId = employee.getEmployeeId();
            if(employeeRepository.existsById(iempId))
            {
                return new ResponseEntity<>(new CustomResponse("cannot add: already in database","failed"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
            else {
                EmployeeMaster newEmployee = employeeRepository.save(employee);
                senderService.sendSimpleEmail(employee.getEmail(),
                        "Your Employee Profile Created!",
                        "Hi "+employee.getEmployeeName() +", Your employee profile has been created on our LAMA portal. Please create password for your profile!");

                return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
            }

        } catch (Exception e) {
        	System.out.println("WE have Employeemaster ex" + e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeMaster> getEmployeeById(@PathVariable String id) {
        Optional<EmployeeMaster> employee = employeeRepository.findById(id);
        return employee.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<EmployeeMaster>> getAllEmployees() {
        List<EmployeeMaster> employees = employeeRepository.findAll();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<EmployeeMaster> updateEmployee(@PathVariable String id, @RequestBody EmployeeMaster employee) {
        if (!employeeRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        employee.setEmployeeId(id);
        EmployeeMaster updatedEmployee = employeeRepository.save(employee);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<CustomResponse> deleteEmployee(@PathVariable String id) {
        try {
            if(employeeRepository.existsById(id)) {

                if(empCardDetSerImp.existEmployeeCardDetailsById(id)) {
                    empCardDetSerImp.deleteByEmployeeId(id);
                }
                if(issueDetailsService.existsIssueDetailsById(id)) {
                    issueDetailsService.DeleteByEmployeeId(id);
                }
                employeeRepository.deleteById(id);
                return new ResponseEntity<>(new CustomResponse("Employee deleted successfully!", "Success"), HttpStatus.NO_CONTENT);
            }
            else {
                return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
        	System.out.println("Error in delete "+ e);
            return new ResponseEntity<>(new CustomResponse("Some error in server!","failed"),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
