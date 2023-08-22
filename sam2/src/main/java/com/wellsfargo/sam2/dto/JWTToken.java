package com.wellsfargo.sam2.dto;

import com.fasterxml.jackson.annotation.JsonProperty;


public class JWTToken {

    private String idToken;
    private String role;

    public JWTToken(String idToken, String role) {
        this.idToken = idToken;
        this.role = role;
    }

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
