package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;

public interface EmployeeIssueDetailsRepository extends JpaRepository<EmployeeIssueDetails, String> {
}
