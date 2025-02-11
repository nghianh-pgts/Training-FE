package com.example.MUJI_backend.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProductUpdateRequest {
    private String productName;
    private String productDescription;
    private Double price;
    private Integer stock;
    private Double discount;
    private String created_at;
    // Không cần trường update_at, vì server sẽ tự cập nhật
    private String subcategoryId; // Chỉ chứa id của danh mục con
    private List<String> imageUrls;

}
