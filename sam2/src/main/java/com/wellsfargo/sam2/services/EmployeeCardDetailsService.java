package com.wellsfargo.sam2.services;

import java.util.Optional;

import com.wellsfargo.sam2.models.EmployeeCardDetails;

public interface EmployeeCardDetailsService {

	EmployeeCardDetails createEmployeeCardDetails(EmployeeCardDetails empCardDet);
    
    Optional<EmployeeCardDetails> findEmployeeCardDetailsById(String id);
    boolean existEmployeeCardDetailsById(String id);
    
    EmployeeCardDetails updateEmployeeCardDetails(EmployeeCardDetails empCardDet);
    
    void deleteByEmployeeId(String id);
    void deleteByLoanId(String id);
}
