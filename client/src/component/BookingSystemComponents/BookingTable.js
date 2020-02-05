import React from 'react';
import { Link } from 'react-router-dom';
import ShowBooking from './ShowBooking';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingTable = (props) => {
    if (props.bookings.length === 0) return null;

    const bookingsList = props.bookings.map(
        booking => {
            return (
                    <tr key={booking.id}>
                        <td>{booking.kidsCovers}</td>
                        <td>{booking.adultsCovers}</td>
                        <td>{booking.customer.firstName} {booking.customer.lastName}</td>
                        <td>{booking.date}</td>
                        <td>{booking.time}</td>
                        <Link to={`/bookings/${booking.id}`}><button>Manage</button></Link>
                    </tr>
            )
        }
 )

        
    return(
        

        <>
        <table>
            <thead>
                <tr>
                    <td>Kids Covers</td>
                    <td>Adults Covers</td>
                    <td>Customer Name</td>
                    <td>Date</td>
                    <td>Time</td>

                </tr>
            </thead>
            <tbody>

                {bookingsList}
            </tbody>
        </table>
        
        </>
        )
}

export default BookingTable;