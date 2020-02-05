import React from 'react';
import BookingTable from './BookingTable';



const BookingPage = (props) => {
    return (
        <BookingTable bookings={props.bookings}/>
    )
}

export default BookingPage;