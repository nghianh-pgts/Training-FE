package com.example.MUJI_backend.mapper;


import com.example.MUJI_backend.dto.request.RegisterUserRequest;
import com.example.MUJI_backend.dto.response.UserResponse;
import com.example.MUJI_backend.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User RegisterUserRequestToUser (RegisterUserRequest request);

    UserResponse UserToUserResponse(User user);

}
