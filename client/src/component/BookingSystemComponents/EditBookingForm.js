import React from 'react';

const EditBookingForm = ({booking}) => {

        if (!booking) {
            return "Loading!"
        }
        
        return(
            <div>
            <h1>Edit Booking</h1>
            <h2>Booking ID: {booking.id}</h2>
            <form>
                <label>Date:</label>
            <input type="date" id="date" defaultValue={booking.date}/>
            <label>Time:</label>
            <input type="time" step="900" name="time" defaultValue={booking.time}/>
            <label>Adults Covers:</label>
            <input type="number" placeholder="Adults:" name="adultsCovers" defaultValue={booking.adultsCovers}/>
            <label>Kids Covers:</label>
            <input type="number" placeholder="Children:" name="kidsCovers" defaultValue={booking.kidsCovers}/>
            <button type="submit">Save Changes to Booking</button>
        </form>
            </div>
        )
    
}

export default EditBookingForm;
