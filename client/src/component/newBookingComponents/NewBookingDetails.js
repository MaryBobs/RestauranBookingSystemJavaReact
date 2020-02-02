import React from 'react';

const NewBookingDetails = () => {
    return (
        <div className="booking-form">
        <h3>New Booking</h3>
        <form>
            <input type="date" />
            <input type="time" step="900" />
            <input type="number" placeholder="Adults:" />
            <input type="number" placeholder="Children" />
            <input type="text" placeholder="Notes:" />
            <button type="submit">Save Booking</button>
        </form>
        </div>
    )
}

export default NewBookingDetails;