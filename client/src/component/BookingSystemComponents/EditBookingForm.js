import React, {Component} from 'react';

class EditBookingForm extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        
        
        handleSubmit(e) {
            e.preventDefault();

            const booking = {
                date: e.target.date.value,
                time: e.target.time.value,
                kidsCovers: e.target.kidsCovers.value,
                adultsCovers: e.target.adultsCovers.value,
                customer: 'http://localhost:8080/customers/'+this.props.booking.customer.id
                // this.props.booking.customer
            }
            this.props.handleUpdate(booking, this.props.booking.id)
        }

        render() {
            if (!this.props.booking) {
                return "Loading!"
            }
        return(
            <div>
            <h1>Edit Booking</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Date:</label>
            <input type="date" name="date" defaultValue={this.props.booking.date}/>
            <label>Time:</label>
            <input type="time" step="900" name="time" defaultValue={this.props.booking.time}/>
            <label>Adults Covers:</label>
            <input type="number" placeholder="Adults:" name="adultsCovers" defaultValue={this.props.booking.adultsCovers}/>
            <label>Kids Covers:</label>
            <input type="number" placeholder="Children:" name="kidsCovers" defaultValue={this.props.booking.kidsCovers}/>
            <button type="submit">Save Changes to Booking</button>
        </form>
            </div>
        )
        }
}

export default EditBookingForm;
