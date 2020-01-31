package com.example.restauranBookingSystem.restaurantBookingSystem.components;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private CustomerRepository customerRepository;

    @Autowired
    public DataLoader(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public DataLoader(){}

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Joseph", "Adams", "11111111111", "joseph@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Nelson", "Mandela", "2222222222", "nelson@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Fitzer", "Konig", "33333333333", "fitzer@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Eugene", "Hualala", "44444444444", "eugene@gmail.com");
        customerRepository.save(customer4);
    }
}
