package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.response.SubcategoryResponse;
import com.example.MUJI_backend.entity.Subcategory;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-18T11:43:30+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class SubcategoryMapperImpl implements SubcategoryMapper {

    @Override
    public SubcategoryResponse subcategoryToSubcategoryResponse(Subcategory subcategory) {
        if ( subcategory == null ) {
            return null;
        }

        SubcategoryResponse subcategoryResponse = new SubcategoryResponse();

        subcategoryResponse.setSubcategoryId( subcategory.getSubcategoryId() );
        subcategoryResponse.setSubCategoryName( subcategory.getSubCategoryName() );

        return subcategoryResponse;
    }
}
