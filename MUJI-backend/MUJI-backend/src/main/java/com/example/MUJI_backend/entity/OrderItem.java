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
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private Integer quantity;
    private Double price;  // Giá sản phẩm tại thời điểm mua (nếu có giảm giá)

    // Nhiều OrderItem thuộc về 1 Order
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    // Nhiều OrderItem thuộc về 1 Product
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}