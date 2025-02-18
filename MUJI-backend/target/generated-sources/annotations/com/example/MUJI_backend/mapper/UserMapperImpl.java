package com.example.MUJI_backend.mapper;

import com.example.MUJI_backend.dto.request.RegisterUserRequest;
import com.example.MUJI_backend.dto.response.UserResponse;
import com.example.MUJI_backend.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-18T11:43:30+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User RegisterUserRequestToUser(RegisterUserRequest request) {
        if ( request == null ) {
            return null;
        }

        User user = new User();

        user.setFullName( request.getFullName() );
        user.setEmail( request.getEmail() );
        user.setPassword( request.getPassword() );
        user.setPhone( request.getPhone() );
        user.setAddress( request.getAddress() );
        user.setDob( request.getDob() );
        user.setGender( request.getGender() );

        return user;
    }

    @Override
    public UserResponse UserToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse userResponse = new UserResponse();

        userResponse.setFullName( user.getFullName() );
        userResponse.setEmail( user.getEmail() );
        userResponse.setPassword( user.getPassword() );
        userResponse.setPhone( user.getPhone() );
        userResponse.setAddress( user.getAddress() );
        userResponse.setDob( user.getDob() );
        userResponse.setGender( user.getGender() );

        return userResponse;
    }
}
