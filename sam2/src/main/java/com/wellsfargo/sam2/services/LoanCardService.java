package com.wellsfargo.sam2.services;

import java.util.List;
import java.util.Optional;

import com.wellsfargo.sam2.models.LoanCard;

public interface LoanCardService {
	
	LoanCard createLoanCard(LoanCard loanCard);
    
    Optional<LoanCard> findLoanCardById(String id);
    
    List<LoanCard> findbyLoanType(String laontype);
    
    LoanCard updateLoanCard(LoanCard loanCard);
    
    LoanCard findById(String id);
}
