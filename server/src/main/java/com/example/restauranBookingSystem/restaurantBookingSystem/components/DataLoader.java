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

        Booking booking1 = new Booking(2,3, customer1, 120, 1,5, "12:00");
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(0,5, customer2, 120, 1,5,"17:00");
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(12,3, customer1, 120, 1,5,"14:00");
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(6,3, customer2, 120, 1,5,"17:30");
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(1,3, customer3, 120, 1,6,"12:30");
        bookingRepository.save(booking5);

        Booking booking6 = new Booking(2,3, customer1, 120, 1,6,"13:30");
        bookingRepository.save(booking6);

        Booking booking7 = new Booking(0,3, customer2, 120, 1,6,"16:15");
        bookingRepository.save(booking7);

        Booking booking8 = new Booking(0,5, customer3, 120, 1,6,"19:00");
        bookingRepository.save(booking8);

        Booking booking9 = new Booking(1,7, customer3, 120, 1,6,"19:30");
        bookingRepository.save(booking9);

        Booking booking10 = new Booking(4,11, customer3, 120, 1,7,"12:30");
        bookingRepository.save(booking10);

        Booking booking11 = new Booking(0,2, customer3, 120, 1,7,"12:15");
        bookingRepository.save(booking11);

        Booking booking12 = new Booking(0,4, customer3, 120, 1,7,"13:45");
        bookingRepository.save(booking12);

        Booking booking13 = new Booking(0,7, customer3, 120, 1,7,"19:30");
        bookingRepository.save(booking13);

        Booking booking14 = new Booking(1,5, customer3, 120, 1,7,"20:15");
        bookingRepository.save(booking14);

        Booking booking15 = new Booking(0,2, customer3, 120, 1,7,"17:15");
        bookingRepository.save(booking15);

    }
}
