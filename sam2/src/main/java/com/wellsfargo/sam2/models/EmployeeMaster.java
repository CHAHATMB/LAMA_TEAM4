package com.wellsfargo.sam2.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import javax.persistence.*;

import org.springframework.beans.factory.annotation.Value;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Table(name = "employee_master")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeMaster {
	
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
	  private String employeeId;
	  private String employeeName;
	  private String email;
	  private String designation;
	  private String department;
	  private int gender;
	  private LocalDate date_of_birth;
	  private LocalDate date_of_join;
	  
	  @Value("0")
	  private int role;
}
