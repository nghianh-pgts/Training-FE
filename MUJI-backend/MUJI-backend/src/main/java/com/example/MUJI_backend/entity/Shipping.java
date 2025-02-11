package com.example.MUJI_backend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String shippingId;

    private Date shippingDate;  // Ngày vận chuyển

    private String shippingMethod;  // Phương thức vận chuyển (ví dụ: Giao hàng nhanh, Giao tiết kiệm)

    private String trackingNumber;  // Mã theo dõi (nếu có)

    private String status;  // Tình trạng giao hàng (ví dụ: Đang giao, Đã giao, Chưa giao)

    // Mỗi vận chuyển liên kết với một đơn hàng
    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
}
