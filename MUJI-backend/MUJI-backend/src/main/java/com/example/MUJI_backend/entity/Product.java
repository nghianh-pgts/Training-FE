package com.example.MUJI_backend.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String productId;

    private String productName;

    @Column(columnDefinition = "TEXT")
    private String productDescription;

    private Double price;

    private Integer stock;

    private Double discount;

    private Date created_at;

    private Date update_at;

    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    @JsonBackReference  // Không serialize lại subcategory khi đã được serialize từ phía Subcategory
    private Subcategory subcategory;

    // Một sản phẩm có thể xuất hiện trong nhiều OrderItem
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems;

    // Một sản phẩm có thể xuất hiện trong nhiều CartItem
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<CartItem> cartItems;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

    // Lưu danh sách link ảnh dưới dạng mảng chuỗi
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    private List<String> imageUrls;

}
