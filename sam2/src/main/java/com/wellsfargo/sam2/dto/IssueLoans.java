package com.wellsfargo.sam2.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class IssueLoans {
//	em.employeeId,lc.loan_id, lc.loanType, ecd.card_issue_date
	private String employeeId;
	private String loan_id;
	private String loanType;
	private LocalDate card_issue_date;
	private int duration_in_year;
}
