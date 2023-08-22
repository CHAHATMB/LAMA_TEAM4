package com.wellsfargo.sam2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.LoanCard;
import com.wellsfargo.sam2.dto.LoanDto;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LoanRepository extends JpaRepository<LoanCard, String> {
	@Query("SELECT new com.wellsfargo.sam2.dto.LoanDto("
			+ "lid.loan_id, lid.loanType,lid.duration_in_year, em.employeeId, em.department, em.designation, im.card_issue_date)"
			+ " FROM EmployeeCardDetails im"
			+ " JOIN im.employee em"
			+ " JOIN im.loanCard lid"
			+ " WHERE em.employeeId= :empId ")
	public List<LoanDto> viewLoans(@Param("empId") String ID);


	List<LoanCard> findByLoanType(String loanType);


}
