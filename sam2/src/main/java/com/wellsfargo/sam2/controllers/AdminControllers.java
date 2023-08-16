package com.wellsfargo.sam2.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.sam2.models.LoanApplications;
import com.wellsfargo.sam2.repository.EmployeeIssueDetailsRepository;
import com.wellsfargo.sam2.repository.LoanApplicationRepository;
import com.wellsfargo.sam2.services.EmailSenderService;

@RestController
@RequestMapping("/api/admin")
public class AdminControllers {
	
	@Autowired
	private EmailSenderService senderService;
	
	@Autowired
	private  EmployeeIssueDetailsRepository loanApplication;
	
	@GetMapping("/")
	String home() {
//		senderService.sendSimpleEmail("chahatmbaghele@gmail.com",
//				"This is email body",
//				"This is email subject");
		return "wc";
	}
	
//	/api/admin/loan/appilications

	@GetMapping("/loan/applications")
	public ResponseEntity<List<LoanApplications>> loanApplications() {
        List<LoanApplications> openIssues = loanApplication.findEmployeeIssueDtosByIssueStatusEquals0();
        return ResponseEntity.ok(openIssues);
    }
}
