package com.wellsfargo.sam2.models;
import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Table(name = "employee_master")
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
	  
	  public EmployeeMaster() {
		  
	  }
	  
	  public EmployeeMaster(int employeeId, String employeeName, String designation, String department, int gender,
			LocalDate date_of_birth, LocalDate date_of_join) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.designation = designation;
		this.department = department;
		this.gender = gender;
		this.date_of_birth = date_of_birth;
		this.date_of_join = date_of_join;
	}
	  
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public LocalDate getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(LocalDate date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public LocalDate getDate_of_join() {
		return date_of_join;
	}
	public void setDate_of_join(LocalDate date_of_join) {
		this.date_of_join = date_of_join;
	}
	

}
