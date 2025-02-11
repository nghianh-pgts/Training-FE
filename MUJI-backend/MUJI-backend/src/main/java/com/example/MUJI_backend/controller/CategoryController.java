package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
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

public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategory(){
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.getAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getSubcategoryById(@PathVariable("id") String categoryId) {
        Category category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    // Create new subcategory
    @PostMapping
    public ResponseEntity<Category> createSubcategory(@RequestBody Category category) {
        Category createdSubcategory = categoryService.createCategory(category);
        return new ResponseEntity<>(createdSubcategory, HttpStatus.CREATED);
    }


}
