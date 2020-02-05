package com.example.restauranBookingSystem.restaurantBookingSystem.models;

import java.sql.Date;

public class BookingRequest {
    private int kidsCovers;
    private int adultsCovers;
    private String date;
    private String time;
    private Long customer;

    public BookingRequest(int kidsCovers, int adultsCovers, String date, String time, Long customer) {
        this.kidsCovers = kidsCovers;
        this.adultsCovers = adultsCovers;
        this.date = date;
        this.time = time;
        this.customer = customer;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getCustomer() {
        return customer;
    }

    public void setCustomer(Long customer) {
        this.customer = customer;
    }
}
