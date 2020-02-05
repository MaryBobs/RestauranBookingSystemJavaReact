import React, {Component} from 'react';

class NewBookingForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            kidsCovers: "",
            adultsCovers: "",
            bookingCustomer: ""
            }
        this.handleTime = this.handleTime.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleKidsCovers = this.handleKidsCovers.bind(this);
        this.handleAdultsCovers = this.handleAdultsCovers.bind(this);
        this.handleSubmitBooking = this.handleSubmitBooking.bind(this);
    }

    handleDate(e) {
        this.setState({date: e.target.value});
    }

    handleTime(e) {
        this.setState({time: e.target.value});
    }

    handleKidsCovers(e) {
        this.setState({kidsCovers: e.target.value});
    }

    handleAdultsCovers(e) {
        this.setState({adultsCovers: e.target.value});
    }

    static getDerivedStateFromProps(cust) {
        return {
            bookingCustomer: cust.bookedCustomer
        }
    }

    handleSubmitBooking(e) {
        e.preventDefault();
        const newBooking = {
            date: this.state.date,
            time: this.state.time,
            kidsCovers: this.state.kidsCovers,
            adultsCovers: this.state.adultsCovers,
            customer: this.state.bookingCustomer
        }
    this.props.addBooking(newBooking);
    }

    render() {
        return (
        <div>
        <h3>New Booking</h3>
        <form onSubmit={this.handleSubmitBooking}>
            <input type="date" name="date" onChange={this.handleDate} value={this.state.date}/>
            <input type="time" step="900" name="time" onChange={this.handleTime} value={this.state.time}/>
            <input type="number" placeholder="Adults:" name="adultsCovers" onChange={this.handleAdultsCovers} value={this.state.adultsCovers}/>
            <input type="number" placeholder="Children:" name="kidsCovers" onChange={this.handleKidsCovers} value={this.state.kidsCovers}/>
            <button type="submit">Save Booking</button>
        </form>
        <p>{this.props.bookedCustomer.id}</p>
        </div>
    )
}
}

export default NewBookingForm;