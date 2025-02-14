package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.request.CreateCategoryRequest;
import com.example.MUJI_backend.dto.response.CategoryResponse;
import com.example.MUJI_backend.dto.response.SubcategoryResponse;
import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = SubcategoryMapper.class)
public interface CategoryMapper {

    @Mapping(target = "subcategories", source = "subcategories")
    CategoryResponse CategoryToCategoryResponse(Category category);

    Category CreateCategoryRequestToCategory(CreateCategoryRequest categoryRequest);

    Category UpdateCategoryRequestToCategory(CreateCategoryRequest categoryRequest);


}
