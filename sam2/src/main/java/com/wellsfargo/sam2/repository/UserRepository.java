package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.User;

public interface UserRepository extends JpaRepository<User, String> {
	User findByEmail(String email);
	Boolean existsByEmail(String email);
	boolean existsById(String id);
	User findByEmployeeId(String id);

}
