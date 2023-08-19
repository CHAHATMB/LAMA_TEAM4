package com.wellsfargo.sam2.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.sam2.models.EmployeeCardDetails;

public interface EmployeeCardDetailsRepository extends JpaRepository<EmployeeCardDetails, String> {
	@Modifying
    @Transactional
    void deleteByEmployee_EmployeeId(String employeeId);
    
    @Transactional
    @Modifying
    @Query("DELETE FROM EmployeeCardDetails l WHERE l.loanCard.loan_id = :loanId")
    void deleteByLoanCard(String loanId);

}
