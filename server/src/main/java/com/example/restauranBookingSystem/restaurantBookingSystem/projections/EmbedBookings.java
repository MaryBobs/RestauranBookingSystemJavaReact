package com.example.restauranBookingSystem.restaurantBookingSystem.projections;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedBookings", types = Customer.class)
public interface EmbedBookings {
    long getId();
    String getFirstName();
    String getLastName();
    String getPhoneNumber();
    String getEmail();
    List<Booking> getBookings();
}
