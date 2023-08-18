package com.wellsfargo.sam2.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;

@Entity
@Table(name = "employee_card_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeCardDetails {
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy="uuid")
	@Column(name="id")
	private String id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private EmployeeMaster employee;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private LoanCard loanCard;

    private LocalDate card_issue_date;

	


	public EmployeeCardDetails( EmployeeMaster employee, LoanCard loanCard, LocalDate card_issue_date) {
		super();
		this.employee = employee;
		this.loanCard = loanCard;
		this.card_issue_date = card_issue_date;
	}


}
