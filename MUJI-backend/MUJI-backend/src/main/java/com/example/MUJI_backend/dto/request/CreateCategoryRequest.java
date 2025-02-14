package com.example.MUJI_backend.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateCategoryRequest {
    private String cateId;

    private String categoryName;

    private String description;

    private String categoryImage;

    private Boolean isActive;
}
