package com.wellsfargo.sam2.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee_issue_details")
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