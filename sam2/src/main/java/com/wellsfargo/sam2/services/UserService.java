package com.wellsfargo.sam2.services;

import java.util.Optional;

import com.wellsfargo.sam2.models.User;

public interface UserService {
	public Optional<User> findByEmployeeId(String employeeId);
	public User createUser(User user);
	public User updateUser(User user);

}
