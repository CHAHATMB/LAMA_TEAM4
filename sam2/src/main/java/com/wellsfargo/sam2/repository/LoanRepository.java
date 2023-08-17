package com.wellsfargo.sam2.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.LoanCard;

public interface LoanRepository extends JpaRepository<LoanCard, String> {
	LoanCard findByLoanType(String loanType);
}
