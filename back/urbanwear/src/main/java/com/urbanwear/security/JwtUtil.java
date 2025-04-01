package com.urbanwear.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Clave secreta (usa al menos 256 bits para HS256)
    private final Key secretKey = Keys.hmacShaKeyFor("clave-secreta-1234567890clave-secreta-1234567890".getBytes());

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 día de expiración
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }
}
