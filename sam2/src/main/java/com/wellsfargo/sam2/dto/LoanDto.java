package com.wellsfargo.sam2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoanDto {



    private String loan_id;
    private String loanType;
    private int duration_in_year;
    private String employeeId;

    private String department;
    private String designation;
    private LocalDate card_issue_date;


}
	