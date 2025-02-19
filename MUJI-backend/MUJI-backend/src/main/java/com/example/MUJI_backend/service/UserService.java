package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.RegisterUserRequest;
import com.example.MUJI_backend.dto.request.UpdateUserRequest;
import com.example.MUJI_backend.entity.Role;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.mapper.UserMapper;
import com.example.MUJI_backend.repository.RoleRepository;
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
    private RoleRepository roleRepository;

    public String CreateUser(RegisterUserRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new RuntimeException("User đã tồn tại");
        };

        User user = userMapper.RegisterUserRequestToUser(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreated_at(LocalDate.now());

//        Set<Role> roles = new HashSet<>();
//        Role role = new Role();
//        role.setName(com.example.MUJI_backend.enums.Role.USER.name());
//        roles.add(role);
//        user.setRoles(roles);

        // Lấy role "USER" từ CSDL, nếu chưa tồn tại thì có thể tạo mới (tùy vào logic của bạn)
        Role role = roleRepository.findByName(com.example.MUJI_backend.enums.Role.USER.name())
                .orElseThrow(() -> new RuntimeException("Role không tồn tại")); // Hoặc tạo mới nếu cần
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRoles(roles);

        userRepository.save(user);
        return "ok";
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public User getUserById(String userId) {
        User userById = userRepository.findById(userId).orElseThrow(()->new RuntimeException("Không tồn tại user với Id: "+userId));
        return userById;
    }

    public User updateUserInfo(String userId, UpdateUserRequest updateUserRequest){
        User user = getUserById(userId);
        user.setFullName(updateUserRequest.getFullName());
        user.setDob(updateUserRequest.getDob());
        user.setAddress(updateUserRequest.getAddress());
        user.setPhone(updateUserRequest.getPhone());
        user.setGender(updateUserRequest.getGender());
        String encodedPass = passwordEncoder.encode(updateUserRequest.getPassword());
        user.setPassword(encodedPass);
        return userRepository.save(user);
    }
}
