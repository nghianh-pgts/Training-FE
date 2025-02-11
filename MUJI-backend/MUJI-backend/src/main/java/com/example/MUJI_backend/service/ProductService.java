package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.ProductUpdateRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.repository.ProductRepository;
import com.example.MUJI_backend.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;


    public List<Product> getAllProducts()  {

        List<Product> products = productRepository.findAll();

        return products;
    }

    public Product addProduct(Product product){
        Product addProduct  = productRepository.save(product);

        if(addProduct==null){

        }

        return addProduct;

    }

    public Product getProductById(String productId) {
        Product productById = productRepository.findById(productId).orElseThrow(()->new RuntimeException("Cannot find product with id '"+productId+"'"));
        return productById;
    }

    @Transactional
    public Product updateProduct(String productId, ProductUpdateRequest productRequest) {
        // Kiểm tra sản phẩm có tồn tại không
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm với ID: " + productId));

        product.setProductName(productRequest.getProductName());
        product.setProductDescription(productRequest.getProductDescription());
        product.setPrice(productRequest.getPrice());
        product.setStock(productRequest.getStock());
        product.setDiscount(productRequest.getDiscount());
        product.setUpdate_at(new Date(System.currentTimeMillis()));

        product.setImageUrls(productRequest.getImageUrls());


        // Kiểm tra subcategory
        if (productRequest.getSubcategoryId() != null) {
            Subcategory subcategory = subCategoryRepository.findById(productRequest.getSubcategoryId())
                    .orElseThrow(() -> new RuntimeException("Không tìm thấy danh mục con!"));
            product.setSubcategory(subcategory);
        }

        return  productRepository.save(product);
    }

    public boolean existsById(String productId) {
        return productRepository.existsById(productId);
    }

    public void deleteProductById(String productId) {
        productRepository.deleteById(productId);
    }
}
