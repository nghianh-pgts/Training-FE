package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.request.ProductRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductResponse productToProductResponse(Product product);

//    Product productRequestToProduct(ProductRequest productRequest);
    Product productRequestToProduct(ProductRequest productRequest);
}
