package com.wellsfargo.sam2.controllers;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;

	@GetMapping("/{id}")
	public ResponseEntity<List<User>> getAllUserDetails() {
		List<User> details = userRepository.findAll();
		return new ResponseEntity<>(details, HttpStatus.OK);
	}

}