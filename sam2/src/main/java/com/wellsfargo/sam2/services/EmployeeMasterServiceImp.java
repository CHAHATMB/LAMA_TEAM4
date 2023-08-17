package com.wellsfargo.sam2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.EmployeeMaster;
import com.wellsfargo.sam2.repository.EmployeeRepository;

@Service
public class EmployeeMasterServiceImp implements EmployeeMasterService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeMasterServiceImp(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeMaster createEmployeeMaster(EmployeeMaster employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Optional<EmployeeMaster> findEmployeeMasterById(String id) {
        
        return employeeRepository.findById(id);
    }

    @Override
    public EmployeeMaster updateEmployeeMaster(EmployeeMaster employee) {
        return employeeRepository.save(employee);
    }
}
