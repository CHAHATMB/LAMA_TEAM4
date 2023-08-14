package com.wellsfargo.sam2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.sam2.services.EmailSenderService;

@RestController
public class AdminControllers {
	
	@Autowired
	private EmailSenderService senderService;
	
	@GetMapping("/")
	String home() {
//		senderService.sendSimpleEmail("chahatmbaghele@gmail.com",
//				"This is email body",
//				"This is email subject");
		return "wc";
	}
}
