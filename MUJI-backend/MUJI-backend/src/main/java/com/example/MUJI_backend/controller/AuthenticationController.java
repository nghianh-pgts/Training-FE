package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.request.LoginRequest;
import com.example.MUJI_backend.dto.request.RegisterUserRequest;
import com.example.MUJI_backend.dto.response.AuthenticationResponse;
import com.example.MUJI_backend.service.AuthenticationService;
import com.example.MUJI_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {
    private UserService userService;
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterUserRequest request){
        return userService.CreateUser(request);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest request){
        var result = authenticationService.authenticate(request);
        return result;
    }
}
