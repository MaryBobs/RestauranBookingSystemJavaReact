import React from 'react';

const ConfirmBooking = (props) => {

    return(
        <div>
        <h1>Booking Successful!</h1>
        <h3>{props.confirmedBooking.time}</h3>
        <h3>{props.confirmedBooking.date}</h3>
        <h3>{props.confirmedBooking.kidsCovers}</h3>
        </div>
        
    )
}

export default ConfirmBooking;