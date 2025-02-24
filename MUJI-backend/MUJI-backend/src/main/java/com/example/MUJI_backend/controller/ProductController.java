package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.request.ProductRequest;
import com.example.MUJI_backend.dto.request.ProductUpdateRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import com.example.MUJI_backend.mapper.ProductMapper;
import com.example.MUJI_backend.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api/products")
@RestController
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
@CrossOrigin(origins = "http://localhost:3000") // Cho phép truy cập từ localhost:3000

public class ProductController {

    private ProductService productService;



    @GetMapping
    public ResponseEntity<List<ProductResponse>>  getAllProduct(){
        return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") String productId){
        Product productById = productService.getProductById(productId);

        return ResponseEntity.status(HttpStatus.OK).body(productById);
    }

    @GetMapping("/subcategory/{subcategoryId}")
    public ResponseEntity<List<ProductResponse>> getProductBySubcateogyId(@PathVariable("subcategoryId") String subcategoryId){
        List<ProductResponse> productBySubcategoryId = productService.getAllProductBySubcategoryId(subcategoryId);

        return ResponseEntity.status(HttpStatus.OK).body(productBySubcategoryId);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductResponse>> getProductsByCategoryId(@PathVariable("categoryId") String categoryId){
        List<ProductResponse> productByCategoryId = productService.getAllProductByCategoryId(categoryId);

        return ResponseEntity.status(HttpStatus.OK).body(productByCategoryId);
    }

    @PostMapping
    public ResponseEntity<ProductResponse> addProduct(@RequestBody ProductRequest product){
        ProductResponse addedProduct = productService.addProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") String productId,@RequestBody ProductUpdateRequest productRequest){
        try {
            Product updatedProduct = productService.updateProduct(productId, productRequest);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Product());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") String productId){

        Boolean exist = productService.existsById(productId);

        if(!exist){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tồn tại sản phẩm với id '"+productId+"'");
        }

        productService.deleteProductById(productId);
        return ResponseEntity.status(HttpStatus.OK).body("Xóa sản phẩm thành công");
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam("keywords") String keyword){
        List<Product> listProduct = productService.searchProductByKeywords(keyword);

        if(!listProduct.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(listProduct);

        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }



}
