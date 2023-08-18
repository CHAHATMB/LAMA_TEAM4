package com.wellsfargo.sam2.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoanApprove {
	      private int employeeId;
	      private String issueId;
	      private String loanType;
	      private int duration_in_year;

	  
}
