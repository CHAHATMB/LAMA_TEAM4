package com.wellsfargo.sam2.models;


public class LoanApprove {
	      private int employeeId;
	      private String issueId;
	      private String loanType;
	      private int duration_in_year;
		public LoanApprove() {
			super();
		}
		public LoanApprove(int employeeId, String issueId, String loanType, int duration_in_year) {
			super();
			this.employeeId = employeeId;
			this.issueId = issueId;
			this.loanType = loanType;
			this.duration_in_year = duration_in_year;
		}
		public int getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(int employeeId) {
			this.employeeId = employeeId;
		}
		public String getIssueId() {
			return issueId;
		}
		public void setIssueId(String issueId) {
			this.issueId = issueId;
		}
		public String getLoanType() {
			return loanType;
		}
		public void setLoanType(String loanType) {
			this.loanType = loanType;
		}
		public int getDuration_in_year() {
			return duration_in_year;
		}
		public void setDuration_in_year(int duration_in_year) {
			this.duration_in_year = duration_in_year;
		}
	      
	  
}
