package com.wellsfargo.sam2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.LoanCard;
import com.wellsfargo.sam2.repository.LoanRepository;

@Service
public class LoanCardServiceImp implements LoanCardService {
	private final LoanRepository loanCardRepository;

    @Autowired
    public LoanCardServiceImp(LoanRepository loanCardRepository) {
        this.loanCardRepository = loanCardRepository;
    }

    @Override
    public LoanCard createLoanCard(LoanCard loanCard) {
        return loanCardRepository.save(loanCard);
    }

    @Override
    public Optional<LoanCard> findLoanCardById(String id) {
        
        return loanCardRepository.findById(id);
    }
    
    @Override
    public LoanCard findById(String id) {
        
        return loanCardRepository.findById(id).get();
    }
    
    @Override
    public List<LoanCard> findbyLoanType(String laontype){
    	return loanCardRepository.findByLoanType(laontype);
    }

    @Override
    public LoanCard updateLoanCard(LoanCard loanCard) {
        return loanCardRepository.save(loanCard);
    }

}
