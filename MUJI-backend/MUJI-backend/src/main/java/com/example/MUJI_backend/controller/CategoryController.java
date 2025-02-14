package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.request.CreateCategoryRequest;
import com.example.MUJI_backend.dto.request.UpdateCategoryRequest;
import com.example.MUJI_backend.dto.response.CategoryResponse;
import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.mapper.CategoryMapper;
import com.example.MUJI_backend.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryMapper categoryMapper;

    @GetMapping
    public ResponseEntity<List<CategoryResponse>> getAllCategory(){
        List<CategoryResponse> categories = categoryService.getAllCategories();

        return ResponseEntity.status(HttpStatus.OK).body(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable("id") String categoryId) {
        Category category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(categoryMapper.CategoryToCategoryResponse(category), HttpStatus.OK);
    }

    // Create new subcategory
    @PostMapping
    public ResponseEntity<CategoryResponse> createSubcategory(@RequestBody CreateCategoryRequest categoryRequest) {
        CategoryResponse createdSubcategory = categoryService.createCategory(categoryRequest);
        return new ResponseEntity<>(createdSubcategory, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryResponse> updateCategory(@PathVariable("id") String categoryId, @RequestBody UpdateCategoryRequest updateCategoryRequest) {
        Category updatedCategory = categoryService.updateCategory(categoryId, updateCategoryRequest);
        return ResponseEntity.status(HttpStatus.OK).body(categoryMapper.CategoryToCategoryResponse(updatedCategory));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") String categoryId) {
        categoryService.deleteCategory(categoryId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
