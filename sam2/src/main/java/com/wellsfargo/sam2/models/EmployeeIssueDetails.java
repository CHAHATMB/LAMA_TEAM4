package com.wellsfargo.sam2.models;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee_issue_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeIssueDetails {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy="uuid")
    private String issue_id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private EmployeeMaster employee;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private ItemMaster item;

    @NotNull
    @Value("1999-01-01")
    private LocalDate issue_date;

    public EmployeeIssueDetails(EmployeeMaster employee, ItemMaster item, LocalDate issue_date, LocalDate return_date) {
        this.employee = employee;
        this.item = item;
        this.issue_date = issue_date;
        this.return_date = return_date;
    }

    private LocalDate return_date;



}