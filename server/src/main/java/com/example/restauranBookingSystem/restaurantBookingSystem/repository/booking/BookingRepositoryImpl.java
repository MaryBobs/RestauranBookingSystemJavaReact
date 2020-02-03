package com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom{

    @Autowired
    EntityManager entityManager;
//
//    @Transactional
//    public List<Distillery> findDistilleryThatHaveWhiskiesAge12(){
//        List<Distillery> result = null;
//        Session session = entityManager.unwrap(Session.class);
//        Criteria criteria = session.createCriteria(Distillery.class);
//        criteria.createAlias("whiskies", "whisky");
//        criteria.add(Restrictions.eq("whisky.age", 12));
//        result = criteria.list();
//        return result;
//    }

    @Transactional
    public List<Booking> findBookingsByDate(Date date){
        List<Booking> result = null;
        Session session = entityManager.unwrap(Session.class);
        Criteria criteria = session.createCriteria(Booking.class);
        criteria.add(Restrictions.like("date", date));
        result = criteria.list();
        return result;
    };

}
