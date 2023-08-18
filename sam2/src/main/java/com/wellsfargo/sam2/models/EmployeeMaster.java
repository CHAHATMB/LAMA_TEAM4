package com.wellsfargo.sam2.models;
import java.time.LocalDate;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "employee_master")
public class EmployeeMaster {
	
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
	  private String employeeId;
	  private String employeeName;
	  private String designation;
	  private String department;
	  private int gender;
	  private LocalDate date_of_birth;
	  private LocalDate date_of_join;
	  

}
