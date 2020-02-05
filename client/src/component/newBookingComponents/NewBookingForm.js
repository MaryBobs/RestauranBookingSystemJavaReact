import React, {Component} from 'react';


class NewBookingForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            kidsCovers: 0,
            adultsCovers: 0,
            bookingCustomer: ""
            // available: "disabled"
            }
        this.handleTime = this.handleTime.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleKidsCovers = this.handleKidsCovers.bind(this);
        this.handleAdultsCovers = this.handleAdultsCovers.bind(this);
        this.handleSubmitBooking = this.handleSubmitBooking.bind(this);
        // this.handleAvailability = this.handleAvailability.bind(this);
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

    // handleAvailability() {
    //     const request = new Request();

    //     if (this.state.date !== "" && this.state.time !== "") {
    //         console.log("hi")
    //         request.get("http://localhost:8080/bookings/byDate/" + this.state.date + "/coversPerHour/" + this.state.time + "/covers/" + (this.state.adultsCovers + this.state.kidsCovers))
    //         .then((res) => {
    //             if(res){
    //                 this.setState({available: "enabled"})
    //             } else {
    //                 this.setState({available: "disabled"})
    //             }
    //         })
    //     }
    // }

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
        
        const availableTimes = this.props.times.map(time => {
            return <option value={time} key={time}>{time}</option>
        })

        return (
        <div>
        <h3 className="new-customer-title">Please enter booking details:</h3>
        <form className="new-customer-form" onSubmit={this.handleSubmitBooking}>
            <input required type="date" name="date" onChange={this.handleDate} value={this.state.date}/>
            <select required name="time" onChange={this.handleTime} value={this.state.time}>
            <option disabled value="">Select Time:</option>
            {availableTimes}
            </select>
            <label>Adults:</label>
            <input type="number" min="1" max="8" name="adultsCovers" onChange={this.handleAdultsCovers} value={this.state.adultsCovers}/>
            <label>Children:</label>
            <input type="number" min="0" max="8" name="kidsCovers" onChange={this.handleKidsCovers} value={this.state.kidsCovers}/>
            <button type="submit">Save Booking</button>            
        </form>
        <p>{this.props.bookedCustomer.id}</p>
        
        </div>

        
    )
}
}

export default NewBookingForm;