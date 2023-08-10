package com.wellsfargo.sam2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.sam2.models.ItemMaster;

public interface ItemRepository extends JpaRepository<ItemMaster, String> {
}
