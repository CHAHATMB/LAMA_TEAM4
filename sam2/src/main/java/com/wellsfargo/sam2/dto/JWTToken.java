package com.wellsfargo.sam2.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class JWTToken {

    private String idToken;
    private String role;
    private String email;
    private String employeeId;

    public JWTToken(String idToken, String role) {
        this.idToken = idToken;
        this.role = role;
    }

//    public JWTToken(String token, String role2, String email2, String employeeId2) {
//		// TODO Auto-generated constructor stub
//	}

	@JsonProperty("id_token")
    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    
    

}
