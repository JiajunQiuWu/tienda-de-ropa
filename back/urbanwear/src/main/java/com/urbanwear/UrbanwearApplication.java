package com.urbanwear;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.urbanwear.model")
@EnableJpaRepositories(basePackages = "com.urbanwear.repository")
@ComponentScan(basePackages = "com.urbanwear")
public class UrbanwearApplication {
    public static void main(String[] args) {
        SpringApplication.run(UrbanwearApplication.class, args);
    }
}
