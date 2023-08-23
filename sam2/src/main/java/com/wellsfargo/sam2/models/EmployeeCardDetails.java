package com.wellsfargo.sam2.models;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;

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

	@NotNull
	@Value("1999-01-01")
    private LocalDate card_issue_date;

	


	public EmployeeCardDetails( EmployeeMaster employee, LoanCard loanCard, LocalDate card_issue_date) {
		super();
		this.employee = employee;
		this.loanCard = loanCard;
		this.card_issue_date = card_issue_date;
	}


}
