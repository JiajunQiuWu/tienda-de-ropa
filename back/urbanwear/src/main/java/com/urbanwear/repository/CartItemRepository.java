package com.urbanwear.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.urbanwear.model.CartItem;
import com.urbanwear.model.User;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
}
