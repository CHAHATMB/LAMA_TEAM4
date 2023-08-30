 package com.wellsfargo.sam2.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loan_card_master")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoanCard {

    @Id
    private String loan_id;
    private String loanType;
    private int duration_in_year;
    

}
