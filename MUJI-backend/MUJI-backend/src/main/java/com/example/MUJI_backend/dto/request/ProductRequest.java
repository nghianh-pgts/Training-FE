package com.example.MUJI_backend.dto.request;

import com.example.MUJI_backend.entity.Subcategory;
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
    private String color;
    private int stock;
    private double discount;
    private Subcategory subcategory;
    private List<String> imageUrls;
}
