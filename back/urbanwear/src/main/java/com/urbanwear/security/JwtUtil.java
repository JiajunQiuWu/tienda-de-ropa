package com.urbanwear.security;

import com.urbanwear.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtUtil {

    // Clave secreta segura de al menos 256 bits para HS256
    private final Key secretKey = Keys.hmacShaKeyFor("clave-secreta-1234567890clave-secreta-1234567890".getBytes());

    public String generateToken(User user) {
        return Jwts.builder()
                .setClaims(Map.of("role", user.getRole())) // Agrega el rol como claim
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // Expira en 1 día
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }
}
