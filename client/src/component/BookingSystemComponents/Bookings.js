import React from 'react';

const Bookings = (props) => {
    const bookingsList = props.Bookings.map(
        bookings => {
            return (
                <table>
                    <tr>
            <th>{keys}</th>
                    </tr>

                    <tr>
                <td>{value}</td>
                    </tr>
                </table>
            )
        }
 )
    
    
    
    return(
        {bookingsList}
        )
}

export default Bookings;