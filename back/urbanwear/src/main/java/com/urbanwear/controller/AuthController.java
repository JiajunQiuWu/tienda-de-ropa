package com.urbanwear.controller;

import com.urbanwear.model.User;
import com.urbanwear.repository.UserRepository;
import com.urbanwear.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser == null) {
            return ResponseEntity.status(401).body("User not found");
        }
    
        if (passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            String token = jwtUtil.generateToken(existingUser);
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
    
    
    
        @PostMapping("/register")
        public ResponseEntity<?> register(@RequestBody User user) {
            if (userRepository.existsByEmail(user.getEmail())) {
                return ResponseEntity.status(400).body("Email already in use");
            }
    
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return ResponseEntity.status(201).body("User registered successfully");
        }
}
