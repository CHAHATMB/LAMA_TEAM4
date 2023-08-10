package com.wellsfargo.sam2.models;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loan_card_master")
public class LoanCard {

    @Id
    private String loan_id;
    private String loan_type;
    private int duration_in_year;
    
	public LoanCard() {
		super();
	}
	
	public LoanCard(String loan_id, String loan_type, int duration_in_year) {
		super();
		this.loan_id = loan_id;
		this.loan_type = loan_type;
		this.duration_in_year = duration_in_year;
	}

	public String getLoan_id() {
		return loan_id;
	}

	public void setLoan_id(String loan_id) {
		this.loan_id = loan_id;
	}

	public String getLoan_type() {
		return loan_type;
	}

	public void setLoan_type(String loan_type) {
		this.loan_type = loan_type;
	}

	public int getDuration_in_year() {
		return duration_in_year;
	}

	public void setDuration_in_year(int duration_in_year) {
		this.duration_in_year = duration_in_year;
	}

    
    // Constructors, getters, and setters
    

    // Other fields, constructors, getters, setters, etc.

    // toString, hashCode, equals, etc.
}
