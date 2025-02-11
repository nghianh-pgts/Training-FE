package com.example.MUJI_backend.service;

import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    public List<Category> getAllCategories(){
        List<Category> categories = categoryRepository.findAll();
        categories.forEach(c -> System.out.println(c.getCategoryName()));  // Kiểm tra dữ liệu
        return categories;
    }

    public Category getCategoryByName(String cateName){
        Category cateByName = categoryRepository.getCategoryByCategoryName(cateName);

        return Optional.ofNullable(cateByName).orElseThrow(()->new RuntimeException("Category with name '" +cateName+ "' not found"));

    }

    public Category getCategoryById(String id){
        Category cateById = categoryRepository.findById(id).orElseThrow(()->new RuntimeException("Category not found"));

        return cateById;

    }


    public Category createCategory(Category category) {

        return categoryRepository.save(category);
    }
}
