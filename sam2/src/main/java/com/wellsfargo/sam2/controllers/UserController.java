package com.wellsfargo.sam2.controllers;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.sam2.helper.JwtUtil;
import com.wellsfargo.sam2.models.EmployeeCardDetails;
import com.wellsfargo.sam2.models.HttpResponse;
import com.wellsfargo.sam2.models.JWTToken;
import com.wellsfargo.sam2.models.LoginDTO;
import com.wellsfargo.sam2.models.OtpDto;
import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.UserRepository;
import com.wellsfargo.sam2.services.CustomUserDetailsService;
import com.wellsfargo.sam2.services.EmailSenderService;
import com.wellsfargo.sam2.services.UserServiceImp;

import java.net.URI;
import java.time.LocalDateTime;

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