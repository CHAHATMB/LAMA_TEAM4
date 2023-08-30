package com.wellsfargo.sam2.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.sam2.dto.IssueLoans;
import com.wellsfargo.sam2.dto.LoanApplications;
import com.wellsfargo.sam2.models.EmployeeCardDetails;

public interface EmployeeCardDetailsRepository extends JpaRepository<EmployeeCardDetails, String> {
	@Modifying
    @Transactional
    void deleteByEmployee_EmployeeId(String employeeId);
    
    @Transactional
    @Modifying
    @Query("DELETE FROM EmployeeCardDetails l WHERE l.loanCard.loan_id = :loanId")
    void deleteByLoanCard(String loanId);
    
    @Query("SELECT new com.wellsfargo.sam2.dto.IssueLoans("
            + "em.employeeId,lc.loan_id, lc.loanType, ecd.card_issue_date, lc.duration_in_year )"
            + " FROM EmployeeCardDetails ecd"
            + " JOIN ecd.employee em"
            + " JOIN ecd.loanCard lc")
	    List<IssueLoans> findIssueLoans();
}
