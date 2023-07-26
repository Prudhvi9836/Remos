package com.maveric.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description="Details about the contact")
public class Contact {
	
	@ApiModelProperty(notes="An unique id of the contact")
	private String id;
	
	@ApiModelProperty(notes="The person's name")
	private String name;
	
	@ApiModelProperty(notes="The person's phone number")
	private String phonenumber;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public Contact(String id, String name, String phonenumber) {
		super();
		this.id = id;
		this.name = name;
		this.phonenumber = phonenumber;
	}
	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", phonenumber=" + phonenumber + "]";
	}
}
