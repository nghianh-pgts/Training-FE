package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.request.CreateCategoryRequest;
import com.example.MUJI_backend.dto.response.CategoryResponse;
import com.example.MUJI_backend.dto.response.SubcategoryResponse;
import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-18T11:43:30+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Autowired
    private SubcategoryMapper subcategoryMapper;

    @Override
    public CategoryResponse CategoryToCategoryResponse(Category category) {
        if ( category == null ) {
            return null;
        }

        CategoryResponse categoryResponse = new CategoryResponse();

        categoryResponse.setSubcategories( subcategoryListToSubcategoryResponseList( category.getSubcategories() ) );
        categoryResponse.setCateId( category.getCateId() );
        categoryResponse.setCategoryName( category.getCategoryName() );
        categoryResponse.setDescription( category.getDescription() );
        categoryResponse.setCategoryImage( category.getCategoryImage() );
        categoryResponse.setIsActive( category.getIsActive() );

        return categoryResponse;
    }

    @Override
    public Category CreateCategoryRequestToCategory(CreateCategoryRequest categoryRequest) {
        if ( categoryRequest == null ) {
            return null;
        }

        Category category = new Category();

        category.setCateId( categoryRequest.getCateId() );
        category.setCategoryName( categoryRequest.getCategoryName() );
        category.setDescription( categoryRequest.getDescription() );
        category.setCategoryImage( categoryRequest.getCategoryImage() );
        category.setIsActive( categoryRequest.getIsActive() );

        return category;
    }

    @Override
    public Category UpdateCategoryRequestToCategory(CreateCategoryRequest categoryRequest) {
        if ( categoryRequest == null ) {
            return null;
        }

        Category category = new Category();

        category.setCateId( categoryRequest.getCateId() );
        category.setCategoryName( categoryRequest.getCategoryName() );
        category.setDescription( categoryRequest.getDescription() );
        category.setCategoryImage( categoryRequest.getCategoryImage() );
        category.setIsActive( categoryRequest.getIsActive() );

        return category;
    }

    protected List<SubcategoryResponse> subcategoryListToSubcategoryResponseList(List<Subcategory> list) {
        if ( list == null ) {
            return null;
        }

        List<SubcategoryResponse> list1 = new ArrayList<SubcategoryResponse>( list.size() );
        for ( Subcategory subcategory : list ) {
            list1.add( subcategoryMapper.subcategoryToSubcategoryResponse( subcategory ) );
        }

        return list1;
    }
}
