package com.example.MUJI_backend.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryResponse {
    private String cateId;
    private String categoryName;
    private String description;
    private String categoryImage;
    private Boolean isActive;
    private List<SubcategoryResponse> subcategories;
}
