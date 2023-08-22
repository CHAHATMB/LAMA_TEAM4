package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.repository.EmployeeIssueDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employeeissue")
public class EmployeeIssueController {

    private final EmployeeIssueDetailsRepository employeeIssueRepository;

    @Autowired
    public EmployeeIssueController(EmployeeIssueDetailsRepository employeeIssueRepository) {
        this.employeeIssueRepository = employeeIssueRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<EmployeeIssueDetails> createEmployeeIssue(@RequestBody EmployeeIssueDetails empIssue) {
        try {
            EmployeeIssueDetails newEmpIssue = employeeIssueRepository.save(empIssue);
            return new ResponseEntity<>(newEmpIssue, HttpStatus.CREATED);
        } catch (Exception e) {
        	System.out.println("eror s in lona corad "+e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeIssueDetails> getIssueStateById(@PathVariable String id) {
        Optional<EmployeeIssueDetails> empIssue = employeeIssueRepository.findById(id);
        return empIssue.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<EmployeeIssueDetails>> getAllEmpIssues() {
        List<EmployeeIssueDetails> empIssues = employeeIssueRepository.findAll();
        return new ResponseEntity<>(empIssues, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<EmployeeIssueDetails> updateEmpIssue(@PathVariable String id, @RequestBody EmployeeIssueDetails empIssue) {
        if (!employeeIssueRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        empIssue.setIssue_id(id);
        EmployeeIssueDetails updatedEmpIssue = employeeIssueRepository.save(empIssue);
        return new ResponseEntity<>(updatedEmpIssue, HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteEmpIssue(@PathVariable String id) {
        try {
            employeeIssueRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
