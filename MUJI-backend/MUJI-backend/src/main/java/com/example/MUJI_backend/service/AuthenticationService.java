package com.example.MUJI_backend.service;

import com.example.MUJI_backend.dto.request.LoginRequest;
import com.example.MUJI_backend.dto.response.AuthenticationResponse;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.repository.RoleRepository;
import com.example.MUJI_backend.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.StringJoiner;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
public class AuthenticationService {
    @NonFinal //đánh dấu để k inject vào constructor
    @Value("${jwt.signerKey}")
    protected String SIGNER_KEY;

    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    public String buildScope(User user){ //Phương thức để build Roles scope vì role scope trong toke cách nhau 1 space
        StringJoiner stringJoiner = new StringJoiner(" "); //1 space mỗi Role
        //Cập nhật lại Role của User
        if(!CollectionUtils.isEmpty(user.getRoles())){
            user.getRoles().forEach(role->{
                stringJoiner.add(role.getName()); //Add list role vào scope
            });
        }

        return stringJoiner.toString();
    }

    //Method trả về Token
    public String generateToken(User user) { //đổi param thành user để lấy ttin user
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer(user.getFullName())
                .issueTime(new Date())
                .expirationTime(new Date(Instant.now().plus(1,ChronoUnit.HOURS).toEpochMilli()))
                .jwtID(UUID.randomUUID().toString())
                .claim("scope", buildScope(user))
                .claim("userId", user.getUserId())
                .build();

        Payload payload = new Payload(claimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize(); //Trả về token theo kiểu String

        } catch (KeyLengthException e) {
            throw new RuntimeException(e);
        } catch (JOSEException e) {
            log.error("Cannot create token");
            throw new RuntimeException(e);
        }
    }

    public SignedJWT verifyToken(String token) throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedToken = SignedJWT.parse(token);

        Date expiryTime = signedToken.getJWTClaimsSet().getExpirationTime();

        var verified = signedToken.verify(verifier);

        if(!verified && expiryTime.after(new Date())){
            throw new RuntimeException("Token không hợp lệ");
        }

        return signedToken;
    }

    public AuthenticationResponse authenticate(LoginRequest loginRequest){
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(()->new RuntimeException("Không tìm thấy user với email "+loginRequest.getEmail()));

        Boolean authenticated = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());

        if(!authenticated){
            throw new RuntimeException("Thông tin người dùng không chính xác");
        }

        if(!user.getIsActive()){
            throw new RuntimeException("Tài khoản đã bị vô hiệu hóa");
        }

        var token = generateToken(user);

        return AuthenticationResponse.builder().token(token).authenticated(true).build();
    }

}
