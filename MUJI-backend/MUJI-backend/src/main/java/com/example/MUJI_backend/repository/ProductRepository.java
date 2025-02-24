package com.example.MUJI_backend.repository;

import com.example.MUJI_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findBySubcategory_SubcategoryId(String subcategoryId);

    List<Product> findBySubcategory_Category_CateId(String categoryId);


    List<Product> findByProductNameContainingIgnoreCase(String name);
    // Hoặc dùng @Query
//     @Query("SELECT p FROM Product p WHERE p.subcategory.category.categoryId = :categoryId")
//     List<Product> findByCategoryId(@Param("categoryId") String categoryId);
}

