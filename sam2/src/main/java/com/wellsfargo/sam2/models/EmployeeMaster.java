package com.wellsfargo.sam2.models;
import com.sun.istack.NotNull;
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
	@NotNull
	@Value("Not Assigned")
	  private String employeeId;
	@NotNull
	@Value("Not Assigned")
	  private String employeeName;

	@NotNull
	@Value("Not Assigned")
	  private String email;

	@NotNull
	@Value("Not Assigned")
	  private String designation;

	@NotNull
	@Value("Not Assigned")
	  private String department;

	@NotNull
	@Value("00")
	  private int gender;

	@NotNull
	@Value("1999-01-01")
	  private LocalDate date_of_birth;

	@NotNull
	@Value("1999-01-01")
	  private LocalDate date_of_join;

	@NotNull
	  @Value("0")
	  private int role;
}
