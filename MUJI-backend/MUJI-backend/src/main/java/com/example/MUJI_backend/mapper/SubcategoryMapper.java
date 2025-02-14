package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.response.SubcategoryResponse;
import com.example.MUJI_backend.entity.Subcategory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SubcategoryMapper {

    SubcategoryResponse subcategoryToSubcategoryResponse(Subcategory subcategory);
}
