package com.wellsfargo.sam2.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.dto.LoanApplications;

public interface EmployeeIssueDetailsRepository extends JpaRepository<EmployeeIssueDetails, String> {
//	@Query("SELECT new com.wellsfargo.sam2.models.LaonApplications(e.employeeId, i.id, im.itemId, i.itemDesc, im.issue_status, i.itemMake)"
//	           + " FROM EmployeeIssueDetails i"
//	           + " JOIN EmployeeMaster e ON i.employeeId = e.employeeId"
//	           + " JOIN ItemMaster im ON i.itemId = im.itemId"
//	           + " WHERE im.issueStatus = '0'")
    @Query("SELECT new com.wellsfargo.sam2.dto.LoanApplications("
            + "em.employeeId, eid.issue_id, im.item_id, im.item_description, im.issue_status, im.item_make)"
            + " FROM EmployeeIssueDetails eid"
            + " JOIN eid.employee em"
            + " JOIN eid.item im"
            + " WHERE im.issue_status = '0'")
	    List<LoanApplications> findEmployeeIssueDtosByIssueStatusEquals0();
    
    @Modifying
    @Transactional
    void deleteByEmployee_EmployeeId(String employeeId);
    
    @Transactional
    @Modifying
    @Query("DELETE FROM EmployeeIssueDetails e WHERE e.item.item_id = :itemId")
    void deleteByItemId(String itemId);

}
