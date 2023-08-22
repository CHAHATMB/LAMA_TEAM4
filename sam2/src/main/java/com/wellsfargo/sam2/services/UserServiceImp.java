package com.wellsfargo.sam2.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.User;
import com.wellsfargo.sam2.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService{

	final private UserRepository userRepository;
	
	@Override
	public User findByEmployeeId(String employeeId) {
		
		return userRepository.findByEmployeeId(employeeId);
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

}
