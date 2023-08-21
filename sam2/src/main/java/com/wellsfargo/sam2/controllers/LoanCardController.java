package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.models.*;
import com.wellsfargo.sam2.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/loancard")
public class LoanCardController {

    private final LoanRepository loanRepository;
    private final EmployeeRepository employeeRepository;
    private final EmployeeCardDetailsRepository employeeCardDetailsRepository;
    private final ItemRepository itemRepository;
    @Autowired
    public LoanCardController(LoanRepository loanRepository,ItemRepository itemRepository,EmployeeRepository employeeRepository,EmployeeCardDetailsRepository employeeCardDetailsRepository) {
        this.loanRepository = loanRepository;
        this.itemRepository=itemRepository;
        this.employeeRepository=employeeRepository;
        this.employeeCardDetailsRepository=employeeCardDetailsRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<LoanCard> createLoanCard(@RequestBody LoanCard loancard) {
        try {
            LoanCard newLoanCard = loanRepository.save(loancard);
            return new ResponseEntity<>(newLoanCard, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
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
    public ResponseEntity<ItemMaster> createCard(@RequestBody ApplyLoanDto loan) {
        try {
          //  System.out.println(loan);
             ItemMaster im= new ItemMaster();
             String desc = loan.getItem_description();
             String category=loan.getItem_category();
             String make=loan.getItem_make();
             int value=loan.getItem_valuation();

             im.setItem_description(desc);
             im.setItem_category(category);
             im.setItem_make(make);
             im.setItem_valuation(value);
//             im.setItem_id("iid16");
//             im.setIssue_status("no");
            ItemMaster newLoan = itemRepository.save(im);
            return new ResponseEntity<>(newLoan, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/all")
    public ResponseEntity<List<LoanCard>> getAllLoanCards() {
        List<LoanCard> laoncards = loanRepository.findAll();
        return new ResponseEntity<>(laoncards, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<LoanCard> updateLoanCard(@PathVariable String id, @RequestBody LoanCard laoncard) {
        if (!loanRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        laoncard.setLoan_id(id);
        LoanCard updatedLoanCard = loanRepository.save(laoncard);
        return new ResponseEntity<>(updatedLoanCard, HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteLoanCard(@PathVariable String id) {
        try {
            loanRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
