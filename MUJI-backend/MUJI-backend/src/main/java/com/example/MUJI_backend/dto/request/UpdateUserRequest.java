package com.example.MUJI_backend.dto.request;

import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;

@Getter
@Setter
public class UpdateUserRequest {
    private String fullName;
    private String password;
    private String phone;
    private String address;
    private LocalDate dob;
    private String gender;
}
