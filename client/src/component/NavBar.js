import React from 'react';

const NavBar = (props) => {
    return (
        <div className="nav">
            <ul>
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/newbooking" className="nav-link">New Booking</a></li>
                <li><a href="/bookings" className="nav-link">Bookings</a></li>   
            </ul>
        </div>
    )
}

export default NavBar;