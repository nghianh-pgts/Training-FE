package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.dto.request.UpdateStatusUserRequest;
import com.example.MUJI_backend.dto.request.UpdateUserRequest;
import com.example.MUJI_backend.dto.response.UserResponse;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.mapper.UserMapper;
import com.example.MUJI_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<List<User>> getAllUser(){
        List<User> users = userService.getAllUser();

        return ResponseEntity.status(HttpStatus.OK)
                .body(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable("id") String userId){
        return ResponseEntity.status(HttpStatus.OK).body(userMapper.UserToUserResponse(userService.getUserById(userId)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUserInfo(@PathVariable("id") String userId,@RequestBody UpdateUserRequest updateUserRequest){
        User userUpdated = new User();

        userUpdated = userService.updateUserInfo(userId, updateUserRequest);

        return ResponseEntity.status(HttpStatus.OK).body(userMapper.UserToUserResponse(userUpdated));
    }

    @PutMapping("/{userId}/status")
    public ResponseEntity<Void> updateStatusUser(@PathVariable("userId") String userId, @RequestBody UpdateStatusUserRequest request){
        User user = userService.updateStatusUser(userId, request);

        if(user==null){
            throw new RuntimeException("Lỗi khi update trạng thái user");
        }
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{userId}/reset-password")
    public ResponseEntity<Void> resetPassword(@PathVariable("userId") String userId){

        User user = userService.resetPassword(userId);

        if(user==null) throw new RuntimeException("Lỗi reset password");

        return ResponseEntity.status(HttpStatus.OK).build();
    }


}
