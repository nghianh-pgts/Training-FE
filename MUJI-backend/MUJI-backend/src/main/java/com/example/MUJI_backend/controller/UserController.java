package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.response.UserResponse;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.mapper.UserMapper;
import com.example.MUJI_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@FieldDefaults(makeFinal = true)
public class UserController {
    private UserService userService;
    private UserMapper userMapper;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUser(){
        List<User> users = userService.getAllUser();

        return ResponseEntity.status(HttpStatus.OK)
                .body(users.stream().map(user->userMapper.UserToUserResponse(user))
                        .collect(Collectors.toList()));

    }

}
