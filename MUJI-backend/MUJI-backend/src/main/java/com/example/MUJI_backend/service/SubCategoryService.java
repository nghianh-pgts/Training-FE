package com.example.MUJI_backend.service;

import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.repository.SubCategoryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class SubCategoryService {
    @Autowired
    private SubCategoryRepository subCategoryRepository;
    // Get all subcategories
    public List<Subcategory> getAllSubcategories() {
        return subCategoryRepository.findAll();
    }

    // Get subcategory by ID
    public Subcategory getSubcategoryById(String subcategoryId) {
        return subCategoryRepository.findById(subcategoryId)
                .orElseThrow(() -> new RuntimeException("Subcategory with ID '" + subcategoryId + "' not found"));
    }

    // Create new subcategory
    public Subcategory createSubcategory(Subcategory subcategory) {
        return subCategoryRepository.save(subcategory);
    }

    // Update subcategory
    public Subcategory updateSubcategory(String subcategoryId, Subcategory updatedSubcategory) {
        Subcategory existingSubcategory = getSubcategoryById(subcategoryId);
        existingSubcategory.setSubCategoryName(updatedSubcategory.getSubCategoryName());
        existingSubcategory.setCategory(updatedSubcategory.getCategory());
        return subCategoryRepository.save(existingSubcategory);
    }

    // Delete subcategory
    public void deleteSubcategory(String subcategoryId) {
        Subcategory existingSubcategory = getSubcategoryById(subcategoryId);
        subCategoryRepository.delete(existingSubcategory);
    }
}
