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

//        Create customers

        Customer customer1 = new Customer("Joseph", "Adams", "07111111111", "joseph@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Nelson", "Mandela", "07222222222", "nelson@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Fitzer", "Konig", "07333333333", "fitzer@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Eugene", "Hualala", "07444444444", "eugene@gmail.com");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Paul", "McLaren", "07384638463", "paul@gmail.com");
        customerRepository.save(customer5);

        Customer customer6 = new Customer("Harrold", "Williamson", "07283649876", "harrold@gmail.com");
        customerRepository.save(customer6);

        Customer customer7 = new Customer("Jojo", "Russotto", "0738452987", "jojo@gmail.com");
        customerRepository.save(customer7);

        Customer customer8 = new Customer("Luise", "Camaro", "07193845208", "luise@gmail.com");
        customerRepository.save(customer8);

        Customer customer9 = new Customer("Dominika", "Panas", "0728364091", "dominika@gmail.com");
        customerRepository.save(customer9);

        Customer customer10 = new Customer("John", "Stevenson", "0718293674", "john@gmail.com");
        customerRepository.save(customer10);

        Customer customer11 = new Customer("Paolo", "Mussolini", "07999999999", "mussolini@gmail.com");
        customerRepository.save(customer11);

        Customer customer12 = new Customer("Marcin", "Terminator", "07293710983", "terminator@gmail.com");
        customerRepository.save(customer12);

        Customer customer13 = new Customer("Naz", "SalmonPink", "0719298370497", "salmonPink@gmail.com");
        customerRepository.save(customer13);

        Customer customer14 = new Customer("Steven", "Stevenson", "0729384762", "stevenson@gmail.com");
        customerRepository.save(customer14);

        Customer customer15 = new Customer("Michael", "NeverAngry", "07873298374", "neverAngry@gmail.com");
        customerRepository.save(customer15);

//        Create Bookings

        Booking booking1 = new Booking(9,6, customer1, 2020, 2,5, "12:00");
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(0,5, customer2, 2020, 2,5,"14:00");
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(12,3, customer3, 2020, 2,5,"17:00");
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(6,3, customer4, 2020, 2,5,"17:30");
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(1,3, customer5, 2020, 2,6,"12:30");
        bookingRepository.save(booking5);

        Booking booking6 = new Booking(2,3, customer6, 2020, 2,6,"13:30");
        bookingRepository.save(booking6);

        Booking booking7 = new Booking(0,3, customer7, 2020, 2,6,"16:15");
        bookingRepository.save(booking7);

        Booking booking8 = new Booking(0,5, customer8, 2020, 2,6,"19:00");
        bookingRepository.save(booking8);

        Booking booking9 = new Booking(1,7, customer9, 2020, 2,6,"19:30");
        bookingRepository.save(booking9);

        Booking booking10 = new Booking(4,11, customer10, 2020, 2,7,"12:15");
        bookingRepository.save(booking10);

        Booking booking11 = new Booking(0,2, customer11, 2020, 2,7,"12:30");
        bookingRepository.save(booking11);

        Booking booking12 = new Booking(8,8, customer12, 2020, 2,7,"16:00");
        bookingRepository.save(booking12);

        Booking booking16 = new Booking(8,8, customer14, 2020, 2,7,"16:15");
        bookingRepository.save(booking16);

        Booking booking17 = new Booking(8,8, customer6, 2020, 2,7,"16:30");
        bookingRepository.save(booking17);

        Booking booking13 = new Booking(0,7, customer13, 2020, 2,7,"17:30");
        bookingRepository.save(booking13);

        Booking booking14 = new Booking(1,5, customer14, 2020, 2,7,"19:15");
        bookingRepository.save(booking14);

        Booking booking15 = new Booking(0,2, customer15, 2020, 2,7,"20:15");
        bookingRepository.save(booking15);

    }
}
