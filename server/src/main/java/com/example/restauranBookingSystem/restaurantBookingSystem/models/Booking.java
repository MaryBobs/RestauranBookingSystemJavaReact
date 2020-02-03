package com.example.restauranBookingSystem.restaurantBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "kids_covers")
    private int kidsCovers;

    @Column(name = "adults_covers")
    private int adultsCovers;

    @Column(name = "date")
    private Date date;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    public Booking(){};

    public Booking(int kidsCovers, int adultsCovers, Customer customer, int year, int month, int date, int hrs, int min) {
        this.kidsCovers = kidsCovers;
        this.adultsCovers = adultsCovers;
        this.customer = customer;
        this.date = new Date(year,month,date,hrs,min);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getKidsCovers() {
        return kidsCovers;
    }

    public void setKidsCovers(int kidsCovers) {
        this.kidsCovers = kidsCovers;
    }

    public int getAdultsCovers() {
        return adultsCovers;
    }

    public void setAdultsCovers(int adultsCovers) {
        this.adultsCovers = adultsCovers;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
