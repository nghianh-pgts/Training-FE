package com.example.MUJI_backend.dto.response;

import com.example.MUJI_backend.entity.Subcategory;
import lombok.*;

import java.sql.Date;
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
    private Date created_at;
    private Date updated_at;
    private List<String> imageUrls;

    // Thông tin danh mục con cần thiết để hiển thị trong form sửa sản phẩm
//    private SubcategoryResponse subcategory;
    private Subcategory subcategory;



}
