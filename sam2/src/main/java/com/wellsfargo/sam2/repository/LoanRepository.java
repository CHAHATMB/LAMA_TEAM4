package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.LoanCard;

public interface LoanRepository extends JpaRepository<LoanCard, String> {
}
