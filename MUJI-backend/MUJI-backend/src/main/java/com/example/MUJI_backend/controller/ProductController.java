package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.request.ProductUpdateRequest;
import com.example.MUJI_backend.dto.response.ProductResponse;
import com.example.MUJI_backend.entity.Product;
import com.example.MUJI_backend.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/products")
@RestController
@NoArgsConstructor
@AllArgsConstructor

public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping
    public ResponseEntity<List<Product>>  getAllProduct(){
        return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") String productId){
        Product productById = productService.getProductById(productId);

        return ResponseEntity.status(HttpStatus.OK).body(productById);
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        Product addedProduct = productService.addProduct(product);
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



}
