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

    // Constructors, getters, and setters

    // Other fields, constructors, getters, setters, etc.

    // toString, hashCode, equals, etc.
}
