package com.wellsfargo.sam2.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item_master")
public class ItemMaster {
	@Id
	 private String item_id;
    private String item_description;
    private String issue_status;
    private String item_make;
    private String item_category;
    private int item_valuation;

    // Constructors, getters, and setters

    public ItemMaster() {
    }

    public ItemMaster(String item_id, String item_description, String issue_status, String item_make, String item_category, int item_valuation) {
        this.item_id = item_id;
        this.item_description = item_description;
        this.issue_status = issue_status;
        this.item_make = item_make;
        this.item_category = item_category;
        this.item_valuation = item_valuation;
    }

	public String getItem_id() {
		return item_id;
	}

	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}

	public String getItem_description() {
		return item_description;
	}

	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}

	public String getIssue_status() {
		return issue_status;
	}

	public void setIssue_status(String issue_status) {
		this.issue_status = issue_status;
	}

	public String getItem_make() {
		return item_make;
	}

	public void setItem_make(String item_make) {
		this.item_make = item_make;
	}

	public String getItem_category() {
		return item_category;
	}

	public void setItem_category(String item_category) {
		this.item_category = item_category;
	}

	public int getItem_valuation() {
		return item_valuation;
	}

	public void setItem_valuation(int item_valuation) {
		this.item_valuation = item_valuation;
	}

}
