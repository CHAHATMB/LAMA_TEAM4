package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.dto.ApplyLoanDto;
import com.wellsfargo.sam2.dto.CustomResponse;
import com.wellsfargo.sam2.dto.LoanDto;
import com.wellsfargo.sam2.models.*;
import com.wellsfargo.sam2.repository.*;
import com.wellsfargo.sam2.services.*;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/loancard")
@AllArgsConstructor
public class LoanCardController {

    private final LoanRepository loanRepository;
    private final EmployeeRepository employeeRepository;
    private final EmployeeIssueDetailsRepository employeeIssueDetailsRepository;
    private final EmployeeCardDetailsRepository employeeCardDetailsRepository;
    private final ItemRepository itemRepository;
    private final EmployeeMasterServiceImp employeeMasterServiceImp;
    private final ItemMasterServiceImp itemMasterServiceImp;
	private final EmployeeCardDetailsServiceImp empCardDetSerImp;
    
    @Autowired
    public LoanCardController(LoanRepository loanRepository,ItemRepository itemRepository,EmployeeRepository employeeRepository,
                              EmployeeCardDetailsRepository employeeCardDetailsRepository,
                              EmployeeMasterServiceImp employeeMasterServiceImp,
                              EmployeeIssueDetailsRepository employeeIssueDetailsRepository,
                              ItemMasterServiceImp itemMasterServiceImp,EmployeeCardDetailsServiceImp empCardDetSerImp) {
        this.loanRepository = loanRepository;
        this.itemRepository=itemRepository;
        this.employeeRepository=employeeRepository;
        this.employeeCardDetailsRepository=employeeCardDetailsRepository;
        this.employeeMasterServiceImp=employeeMasterServiceImp;
        this.itemMasterServiceImp=itemMasterServiceImp;
        this.employeeIssueDetailsRepository=employeeIssueDetailsRepository;
        this.empCardDetSerImp=empCardDetSerImp;


    }

    @PostMapping("/add")
    public ResponseEntity<?> createLoanCard(@RequestBody LoanCard loancard) {
        try {
            if(loanRepository.existsById(loancard.getLoan_id())) {
                return new ResponseEntity<>(new CustomResponse("Already in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
            else {
                LoanCard newLoanCard = loanRepository.save(loancard);
                return new ResponseEntity<>(newLoanCard, HttpStatus.CREATED);

            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanCard> getLoanCardById(@PathVariable String id) {
        Optional<LoanCard> loancard = loanRepository.findById(id);
        return loancard.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/myloans/{id}")
    public ResponseEntity<List<LoanDto>> getLoanById(@PathVariable String id) {

        System.out.println(id);
        List<LoanDto> loancards = loanRepository.viewLoans(id);
        System.out.println(loancards);
        return ResponseEntity.ok(loancards);
    }

    @PostMapping("/applyloans")

    public ResponseEntity<?> createCard(@RequestBody ApplyLoanDto loan) {
        try {
          //  System.out.println(loan);

            if(employeeRepository.existsById(loan.getEmployeeId())) {

                EmployeeIssueDetails empIssueDet= new EmployeeIssueDetails();
                ItemMaster im= new ItemMaster();


                String desc = loan.getItem_description();
                String category = loan.getItem_category();
                String make = loan.getItem_make();
                int value = loan.getItem_valuation();
                im.setItem_description(desc);
                im.setItem_category(category);
                im.setItem_make(make);
                im.setItem_valuation(value);
                im.setIssue_status("0");
               ItemMaster newItem = itemRepository.save(im);

                empIssueDet.setEmployee( employeeMasterServiceImp.findEmployeeMasterById(loan.getEmployeeId()).get());
                empIssueDet.setItem(itemMasterServiceImp.findItemMasterById(im.getItem_id()).get());

                employeeIssueDetailsRepository.save(empIssueDet);
               return new ResponseEntity<>(newItem, HttpStatus.CREATED);
            }
            else {
                return new ResponseEntity<>(new CustomResponse("Employee does not exists","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(new CustomResponse("Could not enter in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


    @GetMapping("/all")
    public ResponseEntity<List<LoanCard>> getAllLoanCards() {
        List<LoanCard> laoncards = loanRepository.findAll();
        return new ResponseEntity<>(laoncards, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<?> updateLoanCard(@PathVariable String id, @RequestBody LoanCard laoncard) {
        if (!loanRepository.existsById(id)) {
            return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

        }
        laoncard.setLoan_id(id);
        LoanCard updatedLoanCard = loanRepository.save(laoncard);
        return new ResponseEntity<>(updatedLoanCard, HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<CustomResponse> deleteLoanCard(@PathVariable String id) {
        try {
            if (loanRepository.existsById(id)) {
                if (empCardDetSerImp.existEmployeeCardDetailsById(id)) {
                    empCardDetSerImp.deleteByLoanId(id);
                }
                loanRepository.deleteById(id);
                return new ResponseEntity<>(new CustomResponse("deleted successfully","success"),HttpStatus.NO_CONTENT);
            }
            else {
                return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
        } catch (Exception e) {
            return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    
    
    @GetMapping("/itemtype/{itemtype}")
    public ResponseEntity<?> getLoanCardByItemType(@PathVariable String itemtype) {
        try {
        	return ResponseEntity.ok(loanRepository.findByLoanType(itemtype));
            
        }catch(Exception e) {
        	System.out.println("Error in finding item "+ e);
            return new ResponseEntity<>(new CustomResponse("Some internal Error","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
