package com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {

    public List<Booking> findBookingsByDate(LocalDate date);
    List<Booking> findByDate(LocalDate date);
    List<Booking> findAllByDateAndTime(LocalDate date, String time);
}
