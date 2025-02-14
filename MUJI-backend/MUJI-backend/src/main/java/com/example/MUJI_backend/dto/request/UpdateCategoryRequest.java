package com.example.MUJI_backend.dto.request;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateCategoryRequest {
    private String cateId;

    private String categoryName;

    private String description;

    private String categoryImage;

    private Boolean isActive;
}
