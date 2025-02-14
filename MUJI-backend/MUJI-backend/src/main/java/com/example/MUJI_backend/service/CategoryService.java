package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.CreateCategoryRequest;
import com.example.MUJI_backend.dto.request.UpdateCategoryRequest;
import com.example.MUJI_backend.dto.response.CategoryResponse;
import com.example.MUJI_backend.entity.Category;
import com.example.MUJI_backend.entity.Subcategory;
import com.example.MUJI_backend.mapper.CategoryMapper;
import com.example.MUJI_backend.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CategoryMapper categoryMapper;


    public List<CategoryResponse> getAllCategories(){
        List<Category> categories = categoryRepository.findAll();
        categories.forEach(c -> System.out.println(c.getCategoryName()));  // Kiểm tra dữ liệu
        return categories.stream().map(categoryMapper::CategoryToCategoryResponse).collect(Collectors.toList());
    }

    public Category getCategoryByName(String cateName){
        Category cateByName = categoryRepository.getCategoryByCategoryName(cateName);

        return Optional.ofNullable(cateByName).orElseThrow(()->new RuntimeException("Category with name '" +cateName+ "' not found"));

    }

    public Category getCategoryById(String id){
        Category cateById = categoryRepository.findById(id).orElseThrow(()->new RuntimeException("Category not found"));

        return cateById;

    }


    public CategoryResponse createCategory(CreateCategoryRequest categoryRequest) {
        Category category = categoryMapper.CreateCategoryRequestToCategory(categoryRequest);
        return categoryMapper.CategoryToCategoryResponse(categoryRepository.save(category));
    }

    public Category updateCategory(String categoryId, UpdateCategoryRequest request) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        if (optionalCategory.isEmpty()) {
            throw new RuntimeException("Category not found with ID: " + categoryId);
        }

        Category category = optionalCategory.get();
        category.setCategoryName(request.getCategoryName());
        category.setDescription(request.getDescription());
        category.setCategoryImage(request.getCategoryImage());
        category.setIsActive(request.getIsActive());

        return categoryRepository.save(category);
    }

    public void deleteCategory(String categoryId) {
        if (!categoryRepository.existsById(categoryId)) {
            throw new RuntimeException("Không tìm thấy danh mục với ID: " + categoryId);
        }
        categoryRepository.deleteById(categoryId);
    }
}
