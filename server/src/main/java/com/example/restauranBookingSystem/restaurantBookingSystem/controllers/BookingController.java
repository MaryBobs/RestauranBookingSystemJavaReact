package com.example.restauranBookingSystem.restaurantBookingSystem.controllers;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "byDate/{date}")
    public List<Booking> findBokkingsByDate(@PathVariable String date){
        String[] arrayOfString = date.split("-", 3);
        System.out.println(date);
        System.out.println(arrayOfString);
        int year = Integer.parseInt(arrayOfString[0]) - 1900;
        int month = Integer.parseInt(arrayOfString[1]) - 1;
        int day = Integer.parseInt(arrayOfString[2]);
        Date searchByDate = new Date(year, month, day);
        return bookingRepository.findByDate(searchByDate);
    }


}
