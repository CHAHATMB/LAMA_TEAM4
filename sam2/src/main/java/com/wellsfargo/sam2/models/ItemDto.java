package com.wellsfargo.sam2.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemDto {
    private String issue_id;

    private String item_description;
    private String item_make;
    private String item_category;
    private int item_valuation;

    private String designation;
    private String department;
    private int employeeId;
}
