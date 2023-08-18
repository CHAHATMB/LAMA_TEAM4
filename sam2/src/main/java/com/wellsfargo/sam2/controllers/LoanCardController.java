package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.models.LoanCard;
import com.wellsfargo.sam2.repository.LoanRepository;

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

    @Autowired
    public LoanCardController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
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
