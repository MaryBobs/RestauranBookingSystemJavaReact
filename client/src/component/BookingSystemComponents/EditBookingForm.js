import React from 'react';

const EditBookingForm = ({booking}) => {

        if (!booking) {
            return "Loading!"
        }
        
        return(
            <div>
            <h1>Testing</h1>
            <h2>Id: {booking.id}</h2>
            <form>
            <input type="date" name="date" default value={booking.date}/>
            <input type="time" step="900" name="time" default value={booking.time}/>
            <input type="number" placeholder="Adults:" name="adultsCovers" default value={booking.adultsCovers}/>
            <input type="number" placeholder="Children:" name="kidsCovers" default value={booking.kidsCovers}/>
            <button type="submit">Save Booking</button>
        </form>
            </div>
        )
    
}

export default EditBookingForm;
