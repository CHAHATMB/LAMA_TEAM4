package com.wellsfargo.sam2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.ItemMaster;
import com.wellsfargo.sam2.repository.ItemRepository;

@Service
public class ItemMasterServiceImp implements ItemMasterService{
	
    private final ItemRepository itemRepository;

    @Autowired
    public ItemMasterServiceImp(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

	@Override
	public ItemMaster createItemMaster(ItemMaster item) {
		return itemRepository.save(item);
	}

	@Override
	public Optional<ItemMaster> findItemMasterById(String id) {
		
		return itemRepository.findById(id);
	}

	@Override
	public ItemMaster updateItemMaster(ItemMaster item) {
		return itemRepository.save(item);
	}

}
