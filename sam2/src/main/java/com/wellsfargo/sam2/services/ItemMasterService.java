package com.wellsfargo.sam2.services;

import java.util.Optional;
import com.wellsfargo.sam2.models.ItemMaster;

public interface ItemMasterService {
	ItemMaster createItemMaster(ItemMaster item);
    
    Optional<ItemMaster> findItemMasterById(String id);
    
    ItemMaster updateItemMaster(ItemMaster item);
}
