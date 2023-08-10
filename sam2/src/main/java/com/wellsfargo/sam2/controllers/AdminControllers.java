package com.wellsfargo.sam2.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class AdminControllers {
	
	@GetMapping("/")
	String home() {
		return "wc";
	}
}
