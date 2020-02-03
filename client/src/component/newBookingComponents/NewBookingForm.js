import React, {Component} from 'react';

class NewBookingForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }

    }

    render() {
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
}

export default NewBookingForm;