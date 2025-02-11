package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    // Get all subcategories
    @GetMapping
    public ResponseEntity<List<Subcategory>> getAllSubcategories() {
        List<Subcategory> subcategories = subCategoryService.getAllSubcategories();
        return new ResponseEntity<>(subcategories, HttpStatus.OK);
    }

    // Get subcategory by ID
    @GetMapping("/{id}")
    public ResponseEntity<Subcategory> getSubcategoryById(@PathVariable("id") String subcategoryId) {
        Subcategory subcategory = subCategoryService.getSubcategoryById(subcategoryId);
        return new ResponseEntity<>(subcategory, HttpStatus.OK);
    }

    // Create new subcategory
    @PostMapping
    public ResponseEntity<Subcategory> createSubcategory(@RequestBody Subcategory subcategory) {
        Subcategory createdSubcategory = subCategoryService.createSubcategory(subcategory);
        return new ResponseEntity<>(createdSubcategory, HttpStatus.CREATED);
    }

    // Update subcategory
    @PutMapping("/{id}")
    public ResponseEntity<Subcategory> updateSubcategory(@PathVariable("id") String subcategoryId, @RequestBody Subcategory subcategory) {
        Subcategory updatedSubcategory = subCategoryService.updateSubcategory(subcategoryId, subcategory);
        return new ResponseEntity<>(updatedSubcategory, HttpStatus.OK);
    }

    // Delete subcategory
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubcategory(@PathVariable("id") String subcategoryId) {
        subCategoryService.deleteSubcategory(subcategoryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
