import React from 'react';
import { NavLink } from 'react-router-dom';


const Bookings = (props) => {
    if (props.bookings.length === 0) return null;

    const bookingsList = props.bookings.map(
        booking => {
            return (
                    <tr key={booking.id}>
                        <td>{booking.kidsCovers}</td>
                        <td>{booking.adultsCovers}</td>
                        <td>{booking.customer.firstName} {booking.customer.lastName}</td>
                        <td>{booking.date}</td>
                        <NavLink to={`/bookings/${props.id}`}><td><button>Manage</button></td></NavLink>
                    </tr>
            )
        }
 )
    
    return(
        <table>
            <thead>
                <tr>
                    <td>Kids Covers</td>
                    <td>Adults Covers</td>
                    <td>Customer Name</td>
                    <td>Date</td>


                </tr>
            </thead>
            <tbody>
                {bookingsList}
            </tbody>
        </table>
        )
}

export default Bookings;