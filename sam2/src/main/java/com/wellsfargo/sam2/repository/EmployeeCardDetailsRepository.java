package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.EmployeeCardDetails;

public interface EmployeeCardDetailsRepository extends JpaRepository<EmployeeCardDetails, String> {
}
