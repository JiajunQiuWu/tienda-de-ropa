package com.urbanwear.controller;

import com.urbanwear.model.*;
import com.urbanwear.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired private CartItemRepository cartRepo;
    @Autowired private ProductRepository productRepo;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@AuthenticationPrincipal User user, @RequestBody CartItem item) {
        Product product = productRepo.findById(item.getProduct().getId()).orElse(null);
        if (product == null) return ResponseEntity.badRequest().body("Producto no encontrado");

        item.setUser(user);
        item.setProduct(product);
        cartRepo.save(item);
        return ResponseEntity.ok("Producto añadido al carrito");
    }

    @GetMapping
    public ResponseEntity<List<CartItem>> getCart(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(cartRepo.findByUser(user));
    }
}
