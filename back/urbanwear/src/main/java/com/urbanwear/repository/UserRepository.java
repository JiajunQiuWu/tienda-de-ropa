package com.urbanwear.repository;

import com.urbanwear.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email); // Ya debes tener esto
    boolean existsByEmail(String email); // <--- Añade esta línea
}
