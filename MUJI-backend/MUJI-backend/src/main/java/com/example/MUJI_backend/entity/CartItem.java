package com.example.MUJI_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private Integer quantity;

    // Nhiều CartItem thuộc về một giỏ hàng
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    // Nhiều CartItem thuộc về một sản phẩm
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
