package com.wellsfargo.sam2.controllers;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.UserRepository;
import com.wellsfargo.sam2.services.CustomUserDetailsService;
import com.wellsfargo.sam2.services.EmailSenderService;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
	
	@Autowired
	private EmailSenderService senderService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
        	
        	// add check for email exists in DB
            if(userRepository.existsByEmail(user.getEmail())){
                return new ResponseEntity<>("Email is already register!", HttpStatus.BAD_REQUEST);
            }

            
        	
        	System.out.println(user.getEmail() + " "+ userRepository.findByEmail(user.getEmail()));
        	
        	user.setIsAdmin(0);
        	user.setPassword(passwordEncoder.encode(user.getPassword()));
        	int otp = new Random().nextInt(900000) + 100000;
        	user.setOtp(otp);
            User newUser = userRepository.save(user);
            
            
            
            // Sending OTP
//            senderService.sendSimpleEmail(user.getEmail(),
//    				"OTP for LAMA",
//    				"Your OTP for Verification at LAMA is " + otp);
            
            newUser.setOtp(0);
            return new ResponseEntity<>("User register successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("There is some internal error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

	@PostMapping(value = "/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginDTO authenticationRequest)
			throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getEmail(), authenticationRequest.getPassword()));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JWTToken(token));
	}


//    @PostMapping("/login")
//    public ResponseEntity<String> authenticateUser(@RequestBody LoginDTO loginDto){
//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                loginDto.getUsernameOrEmail(), loginDto.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        return new ResponseEntity<>("User signed-in successfully!.", HttpStatus.OK);
//    }
    
//    @GetMapping
//    public ResponseEntity<HttpResponse> confirmUserAccount(@RequestParam("token") String token) {
//        Boolean isSuccess = userService.verifyToken(token);
//        return ResponseEntity.ok().body(
//                HttpResponse.builder()
//                        .timeStamp(LocalDateTime.now().toString())
//                        .data(Map.of("Success", isSuccess))
//                        .message("Account Verified")
//                        .status(HttpStatus.OK)
//                        .statusCode(HttpStatus.OK.value())
//                        .build()
//        );
//    }
}