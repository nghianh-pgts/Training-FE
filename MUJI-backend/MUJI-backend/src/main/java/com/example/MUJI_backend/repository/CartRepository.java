package com.example.MUJI_backend.repository;

import com.example.MUJI_backend.entity.Cart;
import com.example.MUJI_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
    Optional<Cart> findByUser(User user);
}
