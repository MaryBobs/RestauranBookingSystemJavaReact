import React from 'react';

const BookingUnsuccessful = () => {

    return(
        <div className="unsuccessful-booking">
        <h1>**Warning**</h1>
        <h2>Cannot create requested Booking</h2>
        <h2>error: exceeds total capacity (maximum covers per hour is: 60)</h2>
        <h3>Please check bookings and try requesting a different time and/or date</h3>
        </div>
        
    )
}

export default BookingUnsuccessful;