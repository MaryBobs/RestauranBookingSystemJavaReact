package com.example.restauranBookingSystem.restaurantBookingSystem.services;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import com.sun.tools.corba.se.idl.InvalidArgument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;

@Service
public class BookingService {

    public static final int AVAILABLE_COVERS = 60;

    private BookingRepository bookingRepository;
    private CustomerRepository customerRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository, CustomerRepository customerRepository) {
        this.bookingRepository = bookingRepository;
        this.customerRepository = customerRepository;
    }

    public Booking addBooking(Booking booking) throws IllegalArgumentException {
        List<Booking> allByDateAndTime = bookingRepository.findAllByDateAndTime(booking.getDate(), booking.getTime());
        if (countTotalCovers(allByDateAndTime) + booking.getTotalCovers() > AVAILABLE_COVERS) {
            throw new IllegalArgumentException("Not enough covers");
        }
        return bookingRepository.save(booking);
    }

    private int countTotalCovers(List<Booking> bookings) {
        int count = 0;
        for(Booking booking : bookings) {
            count += booking.getTotalCovers();
        }
        return count;
    }

    public Customer getCustomer(Long customerId) {
        return customerRepository.findById(customerId).get();
    }
}
