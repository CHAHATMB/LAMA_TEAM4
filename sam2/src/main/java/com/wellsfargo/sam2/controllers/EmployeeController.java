package com.wellsfargo.sam2.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.repository.EmployeeRepository;
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


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    public ResponseEntity<EmployeeMaster> createEmployee(@RequestBody EmployeeMaster employee) {
        try {
            EmployeeMaster newEmployee = employeeRepository.save(employee);
            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
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

    @GetMapping
    public ResponseEntity<List<EmployeeMaster>> getAllEmployees() {
        List<EmployeeMaster> employees = employeeRepository.findAll();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<EmployeeMaster> updateEmployee(@PathVariable String id, @RequestBody EmployeeMaster employee) {
//        if (!employeeRepository.existsById(id)) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        employee.setEmployee_id(id);
//        EmployeeMaster updatedEmployee = employeeRepository.save(employee);
//        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable String id) {
        try {
            employeeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
