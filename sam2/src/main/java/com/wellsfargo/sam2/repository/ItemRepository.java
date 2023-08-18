package com.wellsfargo.sam2.repository;

import com.wellsfargo.sam2.models.ItemDto;
import com.wellsfargo.sam2.models.LoanDto;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.ItemMaster;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<ItemMaster, String> {
    @Query("SELECT new com.wellsfargo.sam2.models.ItemDto("
            + "im.issue_id,lid.item_description ,lid.item_make, lid.item_category, lid.item_valuation, em.designation, em.department,em.employeeId)"
            + " FROM EmployeeIssueDetails im"
            + " JOIN im.employee em"
            + " JOIN im.item lid"
            + "WHERE em.employeeId= :empId ")

    List<ItemDto> viewItems(@Param("empId") String ID);
}
