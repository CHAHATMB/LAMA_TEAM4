package com.wellsfargo.sam2.models;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee_card_details")
public class EmployeeCardDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private EmployeeMaster employee;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private LoanCard loanCard;

    private LocalDate card_issue_date;

	public EmployeeCardDetails(EmployeeMaster employee, LoanCard loanCard, LocalDate card_issue_date) {
		super();
		this.employee = employee;
		this.loanCard = loanCard;
		this.card_issue_date = card_issue_date;
	}

	public EmployeeMaster getEmployee() {
		return employee;
	}

	public void setEmployee(EmployeeMaster employee) {
		this.employee = employee;
	}

	public LoanCard getLoanCard() {
		return loanCard;
	}

	public void setLoanCard(LoanCard loanCard) {
		this.loanCard = loanCard;
	}

	public LocalDate getCard_issue_date() {
		return card_issue_date;
	}

	public void setCard_issue_date(LocalDate card_issue_date) {
		this.card_issue_date = card_issue_date;
	}
    
    // toString, hashCode, equals, etc.
}
