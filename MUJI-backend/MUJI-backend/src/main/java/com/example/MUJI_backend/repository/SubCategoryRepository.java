package com.example.MUJI_backend.repository;

import com.example.MUJI_backend.entity.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryRepository extends JpaRepository<Subcategory,String> {
}
