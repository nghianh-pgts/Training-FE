package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.ProductRequest;
import com.example.MUJI_backend.dto.request.ProductUpdateRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.mapper.ProductMapper;
import com.example.MUJI_backend.repository.ProductRepository;
import com.example.MUJI_backend.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private ProductMapper productMapper;


    public List<ProductResponse> getAllProducts()  {

        List<Product> products = productRepository.findAll();

        return products.stream().map((p)->productMapper.productToProductResponse(p)).collect(Collectors.toList());
    }

    public ProductResponse addProduct(ProductRequest request){
        Product product = productMapper.productRequestToProduct(request);

        String subcategoryId = product.getSubcategory().getSubcategoryId();

        Subcategory persistentSubcategory = subCategoryRepository.findById(subcategoryId)
                .orElseThrow(() -> new RuntimeException("Subcategory not found"));
        product.setCreated_at(LocalDate.now());
        product.setSubcategory(persistentSubcategory);
        Product addProduct  = productRepository.save(product);


        return productMapper.productToProductResponse(addProduct);

    }

    public Product getProductById(String productId) {
        Product productById = productRepository.findById(productId).orElseThrow(()->new RuntimeException("Không tìm thấy product với id '"+productId+"'"));
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
        product.setUpdate_at(LocalDate.now());

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

    public List<ProductResponse> getAllProductBySubcategoryId(String subcategoryId){
        try {
            List<Product> products =  productRepository.findBySubcategory_SubcategoryId(subcategoryId);
            return products.stream().map((p)->productMapper.productToProductResponse(p)).collect(Collectors.toList());
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("Lỗi lấy danh sách Product với subcategoryId");
        }

    }

    public List<ProductResponse> getAllProductByCategoryId(String CategoryId){
        try {
            List<Product> products =  productRepository.findBySubcategory_Category_CateId(CategoryId);
            return products.stream().map((p)->productMapper.productToProductResponse(p)).collect(Collectors.toList());
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("Lỗi lấy danh sách Product với categoryId");
        }

    }

    public List<Product> searchProductByKeywords(String keyWords){
        return productRepository.findByProductNameContainingIgnoreCase(keyWords);
    }

}
