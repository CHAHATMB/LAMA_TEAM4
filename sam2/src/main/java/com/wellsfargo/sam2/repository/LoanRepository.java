package com.wellsfargo.sam2.repository;

import java.util.List;
import java.util.Optional;

import com.wellsfargo.sam2.models.LoanDto;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.LoanCard;
import org.springframework.data.jpa.repository.Query;

public interface LoanRepository extends JpaRepository<LoanCard, String> {
	@Query("SELECT new com.wellsfargo.sam2.models.LoanDto("
			+ "lid.loan_id, lid.loanType,lid.duration_in_year, em.employeeId, em.department, em.designation, im.card_issue_date)"
			+ " FROM EmployeeCardDetails im"
			+ " JOIN im.employee em"
			+ " JOIN im.loanCard lid")
	List<LoanDto> viewLoans();
	LoanCard findByLoanType(String loanType);
}
