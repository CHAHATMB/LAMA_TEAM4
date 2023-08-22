package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.dto.CustomResponse;
import com.wellsfargo.sam2.models.EmployeeCardDetails;
import com.wellsfargo.sam2.repository.EmployeeCardDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employeecard")
public class EmployeeCardController {

    private final EmployeeCardDetailsRepository cardRepository;

    @Autowired
    public EmployeeCardController(EmployeeCardDetailsRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<?> createCard(@RequestBody EmployeeCardDetails card) {
        try {
            if(cardRepository.existsById(card.getId()))
            {
                return new ResponseEntity<>(new CustomResponse("cannot be added: already existing","failed"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
            else {
                EmployeeCardDetails newCard = cardRepository.save(card);
                return new ResponseEntity<>(newCard, HttpStatus.CREATED);
            }
        } catch (Exception e) {
        	System.out.println("The excep "+ e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeCardDetails> getCardById(@PathVariable String id) {
        Optional<EmployeeCardDetails> card = cardRepository.findById(id);
        return card.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<EmployeeCardDetails>> getAllCards() {
        List<EmployeeCardDetails> cards = cardRepository.findAll();
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<EmployeeCardDetails> updateCard(@PathVariable String id, @RequestBody EmployeeCardDetails card) {
        if (!cardRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        card.setId(id);
        EmployeeCardDetails updatedCard = cardRepository.save(card);
        return new ResponseEntity<>(updatedCard, HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<?> deleteCard(@PathVariable String id) {
        try {
            if(cardRepository.existsById(id))
            {
            cardRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
            else {
                return new ResponseEntity<>(new CustomResponse("does not exist in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
        } catch (Exception e) {
            return new ResponseEntity<>(new CustomResponse("does not exist in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
