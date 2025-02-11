package com.example.MUJI_backend.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
public class ProductRequest {
    private String productName;
    private String productDescription;
    private double price;
    private int stock;
    private double discount;
    private Date createdAt;
    private Date updateAt;
    private SubcategoryRequest subcategory;
    private List<String> imageUrls;
}
