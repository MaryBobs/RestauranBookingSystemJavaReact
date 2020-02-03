import React, {Component} from 'react';
import Bookings from './Bookings'
import DateFilter from './DateFilter';
import '../../style/BookingList.css';
import BookingItemBox from '../../container/BookingItemBox';

const BookingList = (props) => {
    const BookingList = props.booking.map(booking => {
        return (
            <div>
                {booking.adultsCovers}      
            </div>
        )       
    })

    return (
        <div>
        {BookingList}
        </div>
    )
    
}
export default BookingList;