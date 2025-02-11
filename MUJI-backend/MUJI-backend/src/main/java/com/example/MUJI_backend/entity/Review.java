package com.example.MUJI_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String reviewId;

    private Integer rating;  // Xếp hạng từ 1 đến 5

    @Column(length = 1000)
    private String comment;  // Nhận xét chi tiết

    private Date createdAt;

    // Mỗi đánh giá thuộc về một sản phẩm
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    // Mỗi đánh giá được viết bởi một người dùng
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
