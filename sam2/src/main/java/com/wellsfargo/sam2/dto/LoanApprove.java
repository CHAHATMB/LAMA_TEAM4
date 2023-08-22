package com.wellsfargo.sam2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoanApprove {
	      private String employeeId;
	      private String issueId;
	      private String loanType;
	      private int duration_in_year;

	  
}
