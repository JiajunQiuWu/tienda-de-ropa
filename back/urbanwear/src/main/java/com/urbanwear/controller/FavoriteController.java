package com.urbanwear.controller;

import com.urbanwear.model.FavoriteItem;
import com.urbanwear.model.Product;
import com.urbanwear.model.User;
import com.urbanwear.repository.FavoriteItemRepository;
import com.urbanwear.repository.ProductRepository;
import com.urbanwear.repository.UserRepository;
import com.urbanwear.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @Autowired private FavoriteItemRepository favoriteRepo;
    @Autowired private ProductRepository productRepo;
    @Autowired private UserRepository userRepo;
    @Autowired private JwtUtil jwtUtil;

    @PostMapping("/add")
    public ResponseEntity<?> addFavorite(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader,
                                         @RequestBody Map<String, Long> body) {
        String token = authHeader.substring(7);
        String email = jwtUtil.extractEmail(token);
        User user = userRepo.findByEmail(email);

        Long productId = body.get("productId");
        Product product = productRepo.findById(productId).orElseThrow();

        FavoriteItem item = new FavoriteItem();
        item.setUser(user);
        item.setProduct(product);
        favoriteRepo.save(item);

        return ResponseEntity.ok("Añadido a favoritos");
    }

    @GetMapping
    public ResponseEntity<List<FavoriteItem>> getFavorites(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {
        String token = authHeader.substring(7);
        String email = jwtUtil.extractEmail(token);
        User user = userRepo.findByEmail(email);

        return ResponseEntity.ok(favoriteRepo.findByUser(user));
    }
}
