package com.example.MUJI_backend.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserResponse {
    private String userId;

    private String fullName;

    private String email;

    private String phone;

    private String address;

    private LocalDate dob;

    private String gender;
}
