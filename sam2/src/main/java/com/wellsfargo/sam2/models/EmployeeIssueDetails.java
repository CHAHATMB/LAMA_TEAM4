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
    
	public EmployeeIssueDetails() {
		super();
	}

	public EmployeeIssueDetails(String issue_id, EmployeeMaster employee, ItemMaster item, LocalDate issue_date,
			LocalDate return_date) {
		super();
		this.issue_id = issue_id;
		this.employee = employee;
		this.item = item;
		this.issue_date = issue_date;
		this.return_date = return_date;
	}
	
	public EmployeeIssueDetails( EmployeeMaster employee, ItemMaster item, LocalDate issue_date,
			LocalDate return_date) {
		super();
		this.employee = employee;
		this.item = item;
		this.issue_date = issue_date;
		this.return_date = return_date;
	}

	public String getIssue_id() {
		return issue_id;
	}

	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}

	public EmployeeMaster getEmployee() {
		return employee;
	}

	public void setEmployee(EmployeeMaster employee) {
		this.employee = employee;
	}

	public ItemMaster getItem() {
		return item;
	}

	public void setItem(ItemMaster item) {
		this.item = item;
	}

	public LocalDate getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(LocalDate issue_date) {
		this.issue_date = issue_date;
	}

	public LocalDate getReturn_date() {
		return return_date;
	}

	public void setReturn_date(LocalDate return_date) {
		this.return_date = return_date;
	}
	


}