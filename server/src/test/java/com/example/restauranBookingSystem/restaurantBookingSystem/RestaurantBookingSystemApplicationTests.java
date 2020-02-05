package com.example.restauranBookingSystem.restaurantBookingSystem;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RestaurantBookingSystemApplicationTests {

	private CustomerRepository customerRepository;
	private BookingRepository bookingRepository;

	@Autowired
	public RestaurantBookingSystemApplicationTests(CustomerRepository customerRepository, BookingRepository bookingRepository) {
		this.customerRepository = customerRepository;
		this.bookingRepository = bookingRepository;
	}

	@Autowired


	@Test
	void contextLoads() {
	}

	@Test
	void canSaveCustomer(){
		assertEquals(15, customerRepository.findAll().size());
	}

	@Test
	void canSaveBooking(){
		Customer customer = customerRepository.getOne(1L);
		Booking booking = new Booking(2,3, customer, 120, 2,11,"12:00");
		bookingRepository.save(booking);
//		System.out.println(booking.getDate());
//		Date date = new Date(120, 2,8,17,00);
//		System.out.println(date);
//		Just testing date formatting
//		DateFormat sfd = new SimpleDateFormat("dd-MM-YY HH:MM");
//		System.out.println(sfd.format(booking.getDate()));
//		System.out.println(customer.getBookings().get(0).getDate());
		assertEquals(16, bookingRepository.findAll().size());
		assertEquals(2, customer.getBookings().size());
	}

	@Test
	void canGetBookingsByDate(){
		Date date = new Date(120, 1,5);
		List<Booking> result = bookingRepository.findByDate(LocalDate.of(120, 1, 5));
		assertEquals(4, result.size());
	}

	@Test
	void canGetTotalCover(){
		Booking booking = bookingRepository.getOne(1L);
		int result = booking.getTotalCovers();
		assertEquals(5, result);
	}

}
