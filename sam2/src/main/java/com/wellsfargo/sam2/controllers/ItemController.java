package com.wellsfargo.sam2.controllers;

import com.wellsfargo.sam2.models.ItemDto;
import com.wellsfargo.sam2.models.ItemMaster;
import com.wellsfargo.sam2.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
public class ItemController {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<ItemMaster> createItem(@RequestBody ItemMaster item) {
        try {
            ItemMaster newItem = itemRepository.save(item);
            return new ResponseEntity<>(newItem, HttpStatus.CREATED);
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
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable String id) {

            if(itemRepository.existsById(id)==true) {
                itemRepository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else
       {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
