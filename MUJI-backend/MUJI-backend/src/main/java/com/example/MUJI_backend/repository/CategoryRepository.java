package com.example.MUJI_backend.repository;

import com.example.MUJI_backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    public Category getCategoryByCategoryName(String categoryName);
}
