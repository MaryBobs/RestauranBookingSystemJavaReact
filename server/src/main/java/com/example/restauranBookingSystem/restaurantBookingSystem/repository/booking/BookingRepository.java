package com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Date;
import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {

    public List<Booking> findBookingsByDate(Date date);
    List<Booking> findByDate(Date date);
}
