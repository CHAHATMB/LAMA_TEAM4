package com.wellsfargo.sam2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.models.LoanApplications;

public interface EmployeeIssueDetailsRepository extends JpaRepository<EmployeeIssueDetails, String> {
//	@Query("SELECT new com.wellsfargo.sam2.models.LaonApplications(e.employeeId, i.id, im.itemId, i.itemDesc, im.issue_status, i.itemMake)"
//	           + " FROM EmployeeIssueDetails i"
//	           + " JOIN EmployeeMaster e ON i.employeeId = e.employeeId"
//	           + " JOIN ItemMaster im ON i.itemId = im.itemId"
//	           + " WHERE im.issueStatus = '0'")
    @Query("SELECT new com.wellsfargo.sam2.models.LoanApplications("
            + "em.employeeId, eid.issue_id, im.item_id, im.item_description, im.issue_status, im.item_make)"
            + " FROM EmployeeIssueDetails eid"
            + " JOIN eid.employee em"
            + " JOIN eid.item im"
            + " WHERE im.issue_status = '0'")
	    List<LoanApplications> findEmployeeIssueDtosByIssueStatusEquals0();

}
