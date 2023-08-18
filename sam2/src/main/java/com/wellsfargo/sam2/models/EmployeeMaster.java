package com.wellsfargo.sam2.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Table(name = "employee_master")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeMaster {
	
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeId;
	  private String employeeName;
	  private String designation;
	  private String department;
	  private int gender;
	  private LocalDate date_of_birth;
	  private LocalDate date_of_join;
	  


}
