package com.example.MUJI_backend.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;
@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
public class UpdateUserRequest {
    private String fullName;
    private String phone;
    private String address;
    private LocalDate dob;
    private String gender;
    // Các trường này chỉ có khi người dùng muốn đổi mật khẩu
    private String oldPassword;
    private String newPassword;
    private String confirmPassword;
}
