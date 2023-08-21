package com.wellsfargo.sam2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomResponse {

    private String message;
    private String status;
    private Object data = null;
    
    public CustomResponse(String message, String status){
    	this.message = message;
    	this.status = status;
    }
}
