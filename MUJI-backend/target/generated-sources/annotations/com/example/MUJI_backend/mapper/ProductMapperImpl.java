package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.request.ProductRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-24T17:29:06+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Override
    public ProductResponse productToProductResponse(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductResponse productResponse = new ProductResponse();

        productResponse.setProductId( product.getProductId() );
        productResponse.setProductName( product.getProductName() );
        productResponse.setProductDescription( product.getProductDescription() );
        productResponse.setPrice( product.getPrice() );
        productResponse.setStock( product.getStock() );
        productResponse.setDiscount( product.getDiscount() );
        productResponse.setCreated_at( product.getCreated_at() );
        List<String> list = product.getImageUrls();
        if ( list != null ) {
            productResponse.setImageUrls( new ArrayList<String>( list ) );
        }
        productResponse.setColor( product.getColor() );
        productResponse.setSubcategory( product.getSubcategory() );

        return productResponse;
    }

    @Override
    public Product productRequestToProduct(ProductRequest productRequest) {
        if ( productRequest == null ) {
            return null;
        }

        Product product = new Product();

        product.setProductName( productRequest.getProductName() );
        product.setColor( productRequest.getColor() );
        product.setProductDescription( productRequest.getProductDescription() );
        product.setPrice( productRequest.getPrice() );
        product.setStock( productRequest.getStock() );
        product.setDiscount( productRequest.getDiscount() );
        product.setSubcategory( productRequest.getSubcategory() );
        List<String> list = productRequest.getImageUrls();
        if ( list != null ) {
            product.setImageUrls( new ArrayList<String>( list ) );
        }

        return product;
    }
}
