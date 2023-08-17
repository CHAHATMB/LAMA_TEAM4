package com.wellsfargo.sam2.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OtpDto {
	private int otp;
	private String email;
	private String employeeId;
}
