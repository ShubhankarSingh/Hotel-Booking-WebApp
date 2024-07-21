package com.project.bookMyHotel.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

public class JwtUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${spring.security.jwt.secret-key}")
    private String jwtSecret;

    @Value("${spring.security.jwt.expiration-time}")
    private int jwtExpirationTime;


}
