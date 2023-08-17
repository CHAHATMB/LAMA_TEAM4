package com.wellsfargo.sam2.services;

import java.util.Optional;

import com.wellsfargo.sam2.models.EmployeeMaster;

public interface EmployeeMasterService {
	EmployeeMaster createEmployeeMaster(EmployeeMaster emp);
    
    Optional<EmployeeMaster> findEmployeeMasterById(String id);
    
    EmployeeMaster updateEmployeeMaster(EmployeeMaster emp);

}
