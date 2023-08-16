package com.wellsfargo.sam2.models;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoanApplications {



		private int employeeId;
	    private String issue_id;
	    private String item_id;
	    private String item_description;
	    private String issue_status;
	    private String item_make;

	    // Constructors, getters, and setters
	    
	    
	    public LoanApplications(int employeeId, String issue_id, String item_id, String item_description,
			String issue_status, String item_make) {
		super();
		this.employeeId = employeeId;
		this.issue_id = issue_id;
		this.item_id = item_id;
		this.item_description = item_description;
		this.issue_status = issue_status;
		this.item_make = item_make;
	}

		public LoanApplications() {
			super();
		}
		

		public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getIssue_id() {
		return issue_id;
	}

	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}

	public String getItem_id() {
		return item_id;
	}

	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}

	public String getItem_description() {
		return item_description;
	}

	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}

	public String getIssue_status() {
		return issue_status;
	}

	public void setIssue_status(String issue_status) {
		this.issue_status = issue_status;
	}

	public String getItem_make() {
		return item_make;
	}

	public void setItem_make(String item_make) {
		this.item_make = item_make;
	}
	    
	}

