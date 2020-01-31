package com.example.restauranBookingSystem.restaurantBookingSystem.repository;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
