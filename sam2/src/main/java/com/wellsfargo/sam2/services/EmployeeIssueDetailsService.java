package com.wellsfargo.sam2.services;

import java.util.Optional;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;

public interface EmployeeIssueDetailsService {
	EmployeeIssueDetails createIssueDetail(EmployeeIssueDetails item);
    
    Optional<EmployeeIssueDetails> findIssueDetailById(String id);
    
    EmployeeIssueDetails updateIssueDetailMaster(EmployeeIssueDetails item);
    
    void DeleteByEmployeeId(String id);
    
    void deleteEmployeeIssueDetailsByItemId(String itemId);
}
