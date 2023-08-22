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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.sam2.helper.JwtUtil;

import com.wellsfargo.sam2.models.EmployeeCardDetails;
import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.models.HttpResponse;

import com.wellsfargo.sam2.models.JWTToken;
import com.wellsfargo.sam2.dto.CustomResponse;
import com.wellsfargo.sam2.dto.LoginDTO;
import com.wellsfargo.sam2.dto.OtpDto;
import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.UserRepository;
import com.wellsfargo.sam2.services.CustomUserDetailsService;
import com.wellsfargo.sam2.services.EmailSenderService;
import com.wellsfargo.sam2.services.EmployeeMasterServiceImp;
import com.wellsfargo.sam2.services.UserServiceImp;

import dev.samstevens.totp.code.CodeVerifier;
import dev.samstevens.totp.qr.QrData;
import dev.samstevens.totp.qr.QrDataFactory;
import dev.samstevens.totp.qr.QrGenerator;
import dev.samstevens.totp.secret.SecretGenerator;
import static dev.samstevens.totp.util.Utils.getDataUriForImage;

import java.util.Collection;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

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
	final private UserServiceImp userServiceImp;
	
	@Autowired
	private EmployeeMasterServiceImp employeeMasterServiceImp;
	
	@Autowired
    private SecretGenerator secretGenerator;

    @Autowired
    private QrDataFactory qrDataFactory;

    @Autowired
    private QrGenerator qrGenerator;
    
    @Autowired
    private CodeVerifier verifier;

	
//    @Autowired
//    public UserController(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
        	String empId = user.getEmployeeId();
        	String email = user.getEmail();
        	
        	EmployeeMaster employee = employeeMasterServiceImp.findEmployeeMasterById(empId).get();
        	if( employee == null ) {
        		return new ResponseEntity<>("Employee Doesn't Exsist, Please ask Admin to Add! ", HttpStatus.BAD_REQUEST);
            }

    		System.out.println(employee.getEmployeeId() + " "+ employee.getEmail() + " == " +email);
    		
        	if( !employee.getEmail().equals(email)  ) {
        		return new ResponseEntity<>("Employee email doesn't matched! ", HttpStatus.BAD_REQUEST);
            }
        	
        	// add check for email exists in DB
            if(userRepository.existsByEmail(user.getEmail())){
                return new ResponseEntity<>("Email is already register!", HttpStatus.BAD_REQUEST);
            }

            // ------------------- totp -----------------------------
            String secret = secretGenerator.generate();
            user.setSecret(secret);

            QrData data = qrDataFactory.newBuilder()
                .label("example@example.com")
                .secret(secret)
                .issuer("AppName")
                .build();

            String qrCodeImage = getDataUriForImage(
              qrGenerator.generate(data), 
              qrGenerator.getImageMimeType()
            );
            
            // ----------------------- end -------------------
        	
        	System.out.println(user.getEmail() + " "+ userRepository.findByEmail(user.getEmail()));
        	
        	user.setIsAdmin(0);
        	
        	user.setIsAdmin(employee.getRole());
        	
        	user.setPassword(passwordEncoder.encode(user.getPassword()));
        	int otp = new Random().nextInt(900000) + 100000;
        	user.setOtp(otp);
        	user.setEnabled(true);
            User newUser = userRepository.save(user);
            
            
            
// Sending OTP
//            senderService.sendSimpleEmail(user.getEmail(),
//    				"OTP for LAMA",
//    				"Your OTP for Verification at LAMA is " + otp);
            System.out.println("Your otp is "+otp);
            
            newUser.setOtp(0);
            newUser.setSecret("null");
            return new ResponseEntity<>(new CustomResponse("User Created successfully!","sucess", qrCodeImage), HttpStatus.CREATED);
        } catch (Exception e) {
        	System.out.println("error in /api/auth/reg " + e);
            return new ResponseEntity<>(new CustomResponse("Some Internal error!","failed"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


	@PostMapping(value = "/login")
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
		User user = userRepository.findByEmail(userDetails.getUsername());
		System.out.println("user id "+user.toString() );
		
		final Collection<? extends GrantedAuthority> roles = userDetails.getAuthorities();
		String role = "";
		
        if (!verifier.isValidCode(user.getSecret(), authenticationRequest.getTotpCode())) {
            return new ResponseEntity<>(new CustomResponse("Wrong TOPT Code !","failed",authenticationRequest),HttpStatus.BAD_REQUEST);
        }
		
		if (roles.contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
			role = "ADMIN";
		}
		else if (roles.contains(new SimpleGrantedAuthority("ROLE_USER"))) {
			role = "USER";
		}
		
		final String token = jwtTokenUtil.generateToken(userDetails);
		
		return ResponseEntity.ok(new JWTToken(token, role, user.getEmail(),user.getEmployeeId()));
	}
	
	@PostMapping(value = "/verifyotp")
	public ResponseEntity<?> verifyOTP(@RequestBody OtpDto otpDto){
		String employeeId = otpDto.getEmployeeId();
		
		User user = userServiceImp.findByEmployeeId(employeeId);
		
		if(user == null) {
			return new ResponseEntity<>("User doesn't exsist!",HttpStatus.BAD_REQUEST);
		}
		
		if( user.getOtp()== 0 || user.getOtp() != otpDto.getOtp()) {
			return new ResponseEntity<>("Invalid OTP!",HttpStatus.BAD_REQUEST);	
		}
		
		user.setEnabled(true);
		userServiceImp.updateUser(user);
		
		
		
		return ResponseEntity.ok("Otp verified successfully!");
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