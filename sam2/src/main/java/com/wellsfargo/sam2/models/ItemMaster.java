package com.wellsfargo.sam2.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item_master")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ItemMaster {
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid",strategy = "uuid")
	 private String item_id;
    private String item_description;
    private String issue_status;
    private String item_make;
    private String item_category;
    private int item_valuation;

    // Constructors, getters, and setters


}
