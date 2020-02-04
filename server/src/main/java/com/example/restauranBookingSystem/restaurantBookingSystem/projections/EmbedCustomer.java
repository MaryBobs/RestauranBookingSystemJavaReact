package com.example.restauranBookingSystem.restaurantBookingSystem.projections;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Date;


@Projection(name = "embedCustomer", types = Booking.class)
public interface EmbedCustomer {
    long getId();
    Date getDate();
    int getKidsCovers();
    int getAdultsCovers();
    String getTime();
    Customer getCustomer();
}
