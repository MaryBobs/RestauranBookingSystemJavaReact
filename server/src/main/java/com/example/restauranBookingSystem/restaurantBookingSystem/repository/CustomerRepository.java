package com.example.restauranBookingSystem.restaurantBookingSystem.repository;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
