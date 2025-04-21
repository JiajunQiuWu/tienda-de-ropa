package com.urbanwear.service;

import com.urbanwear.model.*;
import com.urbanwear.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired private ProductRepository productRepository;
    public List<Product> findAll() { return productRepository.findAll(); }
    public void save(Product product) { productRepository.save(product); }
    public void delete(Long id) { productRepository.deleteById(id); }
}