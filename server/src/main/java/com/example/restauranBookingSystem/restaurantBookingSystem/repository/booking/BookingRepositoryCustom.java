package com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;

import java.util.Date;
import java.util.List;

public interface BookingRepositoryCustom {

    public List<Booking> findBookingsByDate(Date date);
}
