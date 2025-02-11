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
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String paymentId;

    private Date paymentDate;

    private Double amount;

    private String paymentMethod;

    private String transactionId;

    private Boolean status;

    // Mỗi thanh toán liên kết với một đơn hàng
    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
}
