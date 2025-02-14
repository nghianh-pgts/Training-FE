package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {


    ProductResponse productToProductResponse(Product product);
}
