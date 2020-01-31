package com.example.restauranBookingSystem.restaurantBookingSystem;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RestaurantBookingSystemApplicationTests {

	private CustomerRepository customerRepository;

	@Autowired
	public RestaurantBookingSystemApplicationTests(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Test
	void contextLoads() {
	}

	@Test
	void canSaveCustomer(){
		assertEquals(4, customerRepository.findAll().size());
	}

}
