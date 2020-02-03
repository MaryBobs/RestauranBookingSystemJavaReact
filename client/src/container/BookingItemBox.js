import React, {Component} from 'react';
import BookingList from '../component/bookingSystemComponents/BookingList';
import '../style/BookingItemBox.css';

class BookingItemBox extends Component{
    render(){
        return(
            <div className='booking-item-box'>
                <BookingList></BookingList>
                <p>Booking Item List</p>
            </div>
        )
    }
}

export default BookingItemBox;