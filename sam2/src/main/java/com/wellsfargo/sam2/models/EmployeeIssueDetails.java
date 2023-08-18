package com.wellsfargo.sam2.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee_issue_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeIssueDetails {

    @Id
    private String issue_id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private EmployeeMaster employee;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private ItemMaster item;

    private LocalDate issue_date;
    private LocalDate return_date;



}