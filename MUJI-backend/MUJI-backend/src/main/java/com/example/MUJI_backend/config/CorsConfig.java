package com.example.MUJI_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Cho phép tất cả API trong `/api/`
                        .allowedOrigins("http://localhost:3000") // Chỉ định frontend được phép truy cập
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Chỉ định các method được phép
                        .allowedHeaders("*") // Chấp nhận tất cả các headers
                        .allowCredentials(true); // Nếu có cookie hoặc authentication
            }
        };
    }
}
