package com.wellsfargo.sam2.models;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

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
    @NotNull
    @Value("Not Assigned")
    private String loan_id;
    @NotNull
    @Value("Not Assigned")
    private String loanType;
    @NotNull
    @Value("00")
    private int duration_in_year;
    

}
