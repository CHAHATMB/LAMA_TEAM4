package com.wellsfargo.sam2.controllers;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.sam2.dto.CustomResponse;
import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.EmployeeRepository;
import com.wellsfargo.sam2.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final EmployeeRepository employeeRepository;	
    

	@GetMapping("/{id}")
	public ResponseEntity<List<User>> getAllUserDetails() {
		List<User> details = userRepository.findAll();
		return new ResponseEntity<>(details, HttpStatus.OK);
	}
	
	@GetMapping("/details")
	public ResponseEntity<?> getUser(@AuthenticationPrincipal UserDetails userdetail){
		if(userdetail == null) 
			return ResponseEntity.ok(new CustomResponse("No user found","failed"));
		EmployeeMaster employee = employeeRepository.findByEmail(userdetail.getUsername());
		
		return ResponseEntity.ok(employee);
	}

}