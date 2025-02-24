package com.example.MUJI_backend.dto.response;

import com.example.MUJI_backend.entity.Subcategory;
import lombok.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
    private String productId;
    private String productName;
    private String productDescription;
    private Double price;
    private Integer stock;
    private Double discount;
    private LocalDate created_at;
    private LocalDate updated_at;
    private List<String> imageUrls;
    private String color;
    // Thông tin danh mục con cần thiết để hiển thị trong form sửa sản phẩm
//    private SubcategoryResponse subcategory;
    private Subcategory subcategory;



}
