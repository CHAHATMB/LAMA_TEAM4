package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.dto.CustomResponse;
import com.wellsfargo.sam2.dto.ItemDto;
import com.wellsfargo.sam2.models.ItemMaster;
import com.wellsfargo.sam2.repository.EmployeeIssueDetailsRepository;
import com.wellsfargo.sam2.repository.ItemRepository;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
@AllArgsConstructor
public class ItemController {

    private final ItemRepository itemRepository;
    
    @Autowired
    private final EmployeeIssueDetailsRepository employeeIssueRepository;
    
//    @Autowired
//    public ItemController(ItemRepository itemRepository) {
//        this.itemRepository = itemRepository;
//    }

    @PostMapping("/add")
    public ResponseEntity<?> createItem(@RequestBody ItemMaster item) {
        try {
            if(itemRepository.existsById(item.getItem_id()))
            {
                return new ResponseEntity<>(new CustomResponse("cannot add: already in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
            else {
                ItemMaster newItem = itemRepository.save(item);
                return new ResponseEntity<>(newItem, HttpStatus.CREATED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemMaster> getItemById(@PathVariable String id) {
        Optional<ItemMaster> item = itemRepository.findById(id);
        return item.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<ItemMaster>> getAllItems() {
        List<ItemMaster> items = itemRepository.findAll();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<ItemMaster> updateItem(@PathVariable String id, @RequestBody ItemMaster item) {
        System.out.println(item.toString());
    	if (!itemRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        item.setItem_id(id);
        ItemMaster updatedItem = itemRepository.save(item);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

    @GetMapping("/myitem/{id}")
    public ResponseEntity<List<ItemDto>> getItems(@PathVariable String id) {
        List<ItemDto> itemcards = itemRepository.viewItems(id);
        return ResponseEntity.ok(itemcards);
    }
    @PostMapping("/delete/{id}")
    public ResponseEntity<CustomResponse> deleteItem(@PathVariable String id) {
        try {

            if (itemRepository.existsById(id) == true) {
            	employeeIssueRepository.deleteByItemId(id);
                itemRepository.deleteById(id);
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new CustomResponse("Item deleted successfully!", "Success")
                );

            } else {
                return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

            }
        }catch(Exception e) {
        	System.out.println("Error in delete item "+ e);
            return new ResponseEntity<>(new CustomResponse("Not found in database","failed"),HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
