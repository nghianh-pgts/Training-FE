package com.example.MUJI_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String orderId;

    private Date order_date;

    private Boolean status;

    private String shipping_address;

    private Double totalAmount;

    private Boolean payment_status;

    private Date createdAt;

    private Date updatedAt;

    // Nhiều đơn hàng thuộc về 1 người dùng
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Một đơn hàng có nhiều sản phẩm (thông qua OrderItem)
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems;

    //Mỗi thanh toán liên kết với một đơn hàng
    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Payment payment;

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Shipping shipping;
}
