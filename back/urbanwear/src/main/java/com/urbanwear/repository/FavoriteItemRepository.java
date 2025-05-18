package com.urbanwear.repository;

import com.urbanwear.model.FavoriteItem;
import com.urbanwear.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FavoriteItemRepository extends JpaRepository<FavoriteItem, Long> {
    List<FavoriteItem> findByUser(User user);
}
