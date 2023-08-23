package com.wellsfargo.sam2.controllers;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.sam2.models.EmployeeCardDetails;
import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.models.ItemMaster;
import com.wellsfargo.sam2.dto.LoanApplications;
import com.wellsfargo.sam2.dto.LoanApprove;
import com.wellsfargo.sam2.repository.EmployeeIssueDetailsRepository;
import com.wellsfargo.sam2.services.EmailSenderService;
import com.wellsfargo.sam2.services.EmployeeCardDetailsServiceImp;
import com.wellsfargo.sam2.services.EmployeeIssueDetailsServiceImp;
import com.wellsfargo.sam2.services.EmployeeMasterServiceImp;
import com.wellsfargo.sam2.services.ItemMasterServiceImp;
import com.wellsfargo.sam2.services.LoanCardServiceImp;

@RestController
@RequestMapping("/api/admin")
public class AdminControllers {
	
	@Autowired
	private EmailSenderService senderService;

	@Autowired
	private  EmployeeIssueDetailsRepository loanApplication;
	
	@Autowired
	private ItemMasterServiceImp itemMasterServiceImp;
	
	@Autowired
	private EmployeeIssueDetailsServiceImp issueDetailsService;
	
	@Autowired
	private EmployeeMasterServiceImp employeeMasterServiceImp;

	@Autowired
	private LoanCardServiceImp loanCardServiceImp;
	
	@Autowired
	private EmployeeCardDetailsServiceImp empCardDetSerImp;
	
	@Autowired
	public AdminControllers(EmailSenderService senderService, EmployeeIssueDetailsRepository loanApplication,
			ItemMasterServiceImp itemMasterServiceImp, EmployeeIssueDetailsServiceImp issueDetailsService) {
		super();
		this.senderService = senderService;
		this.loanApplication = loanApplication;
		this.itemMasterServiceImp = itemMasterServiceImp;
		this.issueDetailsService = issueDetailsService;
	}
	
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
	
//  @PutMapping("/{id}")
//  public ResponseEntity<EmployeeIssueDetails> updateEmpIssue(@PathVariable String id, @RequestBody EmployeeIssueDetails empIssue) {
//      if (!employeeIssueRepository.existsById(id)) {
//          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//      }
//      empIssue.setId(id);
//      EmployeeIssueDetails updatedEmpIssue = employeeIssueRepository.save(empIssue);
//      return new ResponseEntity<>(updatedEmpIssue, HttpStatus.OK);
//  }
	
	@PostMapping("/loan/approve")
	public ResponseEntity<?> loanApprove(@RequestBody LoanApprove loanapprove ) {
		
		String employeeId = loanapprove.getEmployeeId();
		String issue_id = loanapprove.getIssueId();
		String loan_id = loanapprove.getLoan_id();
		
		Optional<EmployeeIssueDetails> empIssue = loanApplication.findById(issue_id);
		
		EmployeeIssueDetails empi = empIssue.get();
		
		empi.setIssue_date(LocalDate.now());
		empi.setReturn_date(LocalDate.now().plusYears(loanapprove.getDuration_in_year()));
		
		ItemMaster item = empi.getItem();
		item.setIssue_status("1");
		
		itemMasterServiceImp.updateItemMaster(item);
		
		issueDetailsService.updateIssueDetailMaster(empi);
		
		EmployeeMaster empMaster = new EmployeeMaster();
		empMaster.setEmployeeId(employeeId);
		System.out.println(loanapprove.getLoanType());
		EmployeeCardDetails empCardDet = new EmployeeCardDetails(
				employeeMasterServiceImp.findEmployeeMasterById(employeeId).get(),
				 loanCardServiceImp.findById(loan_id),
				 LocalDate.now()
				);
		empCardDet.setId(issue_id);
		System.out.println("This is the me id  "+empCardDet.getId());
		empCardDetSerImp.createEmployeeCardDetails(empCardDet);
		
		
		return new ResponseEntity<>("Success", HttpStatus.OK);
    }
}
