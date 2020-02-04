package com.example.restauranBookingSystem.restaurantBookingSystem.components;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private CustomerRepository customerRepository;
    private BookingRepository bookingRepository;

    @Autowired
    public DataLoader(CustomerRepository customerRepository, BookingRepository bookingRepository) {
        this.customerRepository = customerRepository;
        this.bookingRepository = bookingRepository;
    }




    public DataLoader(){}

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Joseph", "Adams", "11111111111", "joseph@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Nelson", "Mandela", "22222222222", "nelson@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Fitzer", "Konig", "33333333333", "fitzer@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Eugene", "Hualala", "44444444444", "eugene@gmail.com");
        customerRepository.save(customer4);

        Booking booking1 = new Booking(2,3, customer1, 120, 1,4, "12:00");
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(0,5, customer2, 120, 1,4,"17:00");
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(12,3, customer1, 120, 1,5,"14:00");
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(6,3, customer2, 120, 1,5,"17:30");
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(1,3, customer3, 120, 1,6,"12:30");
        bookingRepository.save(booking5);

    }
}
