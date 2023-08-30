package com.wellsfargo.sam2.models;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;

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
    @NotNull
    @Value("Not Assigned")
	 private String item_id;
    @NotNull
    @Value("Not Assigned")
    private String item_description;
    @NotNull
    @Value("Not Assigned")
    private String issue_status;
    @NotNull
    @Value("Not Assigned")
    private String item_make;
    @NotNull
    @Value("Not Assigned")
    private String item_category;
    @NotNull
    @Value("00")
    private int item_valuation;

}
