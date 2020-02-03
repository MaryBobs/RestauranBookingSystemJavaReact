package com.example.restauranBookingSystem.restaurantBookingSystem.repository;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
