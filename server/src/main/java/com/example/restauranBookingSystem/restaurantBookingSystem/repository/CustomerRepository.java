package com.example.restauranBookingSystem.restaurantBookingSystem.repository;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.projections.EmbedBookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedBookings.class)
public interface CustomerRepository extends JpaRepository<Customer, Long>{
}
