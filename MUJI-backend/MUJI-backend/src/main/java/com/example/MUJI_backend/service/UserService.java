package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.RegisterUserRequest;
import com.example.MUJI_backend.entity.Role;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.mapper.UserMapper;
import com.example.MUJI_backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor //
@FieldDefaults(makeFinal = true) //Các thuộc tính phải là hằng thì RequiredArgsConstructor mới tự động Inject
public class UserService {

    private UserRepository userRepository;
    private UserMapper userMapper;
    private PasswordEncoder passwordEncoder;

    public String CreateUser(RegisterUserRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new RuntimeException("User đã tồn tại");
        };

        User user = userMapper.RegisterUserRequestToUser(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreated_at(LocalDate.now());

        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setName(com.example.MUJI_backend.enums.Role.USER.name());
        roles.add(role);
        user.setRoles(roles);

        userRepository.save(user);
        return "ok";
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }
}
