package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.dto.LoanApplications;

import java.util.List;

public interface LoanApplicationRepository extends JpaRepository<EmployeeIssueDetails, String> {

	@Query("SELECT new com.wellsfargo.sam2.dto.LoanApplications("
            + "em.employeeId, eid.issue_id, im.item_id, im.item_description, im.issue_status, im.item_make)"
            + " FROM EmployeeIssueDetails eid"
            + " JOIN eid.employee em"
            + " JOIN eid.item im"
            + " WHERE im.issue_status = '0'")
    List<LoanApplications> findEmployeeIssueDtosByIssueStatusEquals0();
}
