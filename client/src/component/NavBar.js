import React from 'react';

const NavBar = (props) => {
    return (
        <div class="nav">
            <ul>
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/newbooking" class="nav-link">New Booking</a></li>
                <li><a href="/bookings" class="nav-link"><em>Bookings</em></a></li>   
            </ul>
        </div>
    )
}

export default NavBar;