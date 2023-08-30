package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.EmployeeMaster;

public interface EmployeeRepository extends JpaRepository<EmployeeMaster, String> {
	
	EmployeeMaster findByEmail(String email);
}
