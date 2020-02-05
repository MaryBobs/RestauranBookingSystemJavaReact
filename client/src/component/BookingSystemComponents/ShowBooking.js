import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';



const ShowBooking = ({booking, deleteBooking, barchartdata, bookings}) => {

    if (!booking) {
        return "Loading"
    }

    function deleteThisBooking(){
        const url = "http://localhost:8080/bookings/" + booking.id;
        deleteBooking(url);
    }
    
    
    return (
        <div className="booking-container">
            <h3 className="booking-item">ID: {booking.id}</h3>
            <h3 className="booking-item">Date: {booking.date}</h3>
            <h3 className="booking-item">Time: {booking.time}</h3>
            <h3 className="booking-item">Covers: Kids: {booking.kidsCovers}  Adults: {booking.adultsCovers}</h3>
            <h3 className="booking-item">Customer: {booking.customer.firstName} {booking.customer.lastName}</h3>
            <h3 className="booking-item">Email:{booking.customer.email} </h3>
            <h3 className="booking-item">Contact Number: {booking.customer.phoneNumber}</h3>
            <button className="booking-btn" onClick={deleteThisBooking}>Delete</button>
            <Link to={`/bookings/${booking.id}/edit`}><button className="booking-btn">Edit</button></Link>   
            <div className="BarChart" style={{position: "relative", width: 500, height:550}}> 
            <BarChart/>
            </div>
           
        </div>
    )
}

export default ShowBooking;

