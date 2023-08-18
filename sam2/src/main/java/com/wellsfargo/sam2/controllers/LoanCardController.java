package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.models.*;
import com.wellsfargo.sam2.repository.ItemRepository;
import com.wellsfargo.sam2.repository.LoanRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/loancards")
public class LoanCardController {

    private final LoanRepository loanRepository;

    private final ItemRepository itemRepository;
    @Autowired
    public LoanCardController(LoanRepository loanRepository,ItemRepository itemRepository) {
        this.loanRepository = loanRepository;
        this.itemRepository=itemRepository;
    }

    @PostMapping
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
    @GetMapping("/myloans")
    public ResponseEntity<List<LoanDto>> getAllLoans() {
        List<LoanDto> loancards = loanRepository.viewLoans();
        return ResponseEntity.ok(loancards);
    }

    @PostMapping("/applyloans")
    public ResponseEntity<ItemMaster> createCard(@RequestBody ApplyLoanDto loan) {
        try {
            System.out.println(loan);
             ItemMaster im= new ItemMaster();
             im.setItem_description(loan.getItem_description());
             im.setItem_category(loan.getItem_category());
             im.setItem_make(loan.getItem_make());
             im.setItem_valuation(loan.getItem_valuation());
//             im.setItem_id("iid16");
//             im.setIssue_status("no");
            ItemMaster newLoan = itemRepository.save(im);
            return new ResponseEntity<>(newLoan, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping
    public ResponseEntity<List<LoanCard>> getAllLoanCards() {
        List<LoanCard> laoncards = loanRepository.findAll();
        return new ResponseEntity<>(laoncards, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LoanCard> updateLoanCard(@PathVariable String id, @RequestBody LoanCard laoncard) {
        if (!loanRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        laoncard.setLoan_id(id);
        LoanCard updatedLoanCard = loanRepository.save(laoncard);
        return new ResponseEntity<>(updatedLoanCard, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteLoanCard(@PathVariable String id) {
        try {
            loanRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
