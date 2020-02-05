import React, {Component} from 'react';
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingForm from '../component/newBookingComponents/NewBookingForm';
import Request from '../helpers/request';
import './NewBookingBox.css';
import ConfirmBooking from '../component/newBookingComponents/ConfirmBooking';



class NewBookingBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: [],
            bookingCustomer: "",
            times: ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45",
            "15:00", "15:15", "15:30", "15:45","16:00", "16:15", "16:30", "16:45","17:00", "17:15", "17:30", "17:45",
            "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45",
            "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45",],
            conBooking: ""
        }

        this.handlePost = this.handlePost.bind(this);
        this.handleNewBooking = this.handleNewBooking.bind(this);
        this.handleCustomer = this.handleCustomer.bind(this);
        this.visibleNewCust = this.visibleNewCust.bind(this);
;    }

    componentDidMount(){
        const request = new Request();

        request.get('http://localhost:8080/customers/all')
        .then((data) => {
            this.setState({customers: data})
        })
    }

    handlePost(customer) {
        const request = new Request();
        request.post('http://localhost:8080/customers', customer)
        .then((customer) => {
            this.setState({bookingCustomer: customer.id})
        })
    }

    handleNewBooking(booking) {
        const request = new Request();
        request.post('http://localhost:8080/bookings', booking)
        .then((booking) => {
            this.props.handleThisBooking(booking)
        })
        .then(() => {
            window.location = `/bookings/${this.props.booking.id}/confirm`
        })
    }
    
    handleCustomer(customer) {
        this.setState({bookingCustomer: customer})
        this.visibleExistingCust();
    }

    visibleExistingCust() {
        document.getElementById("booking").style.display = "block";
        document.getElementById("newCustForm").style.display = "none";
      }

      visibleNewCust() {
        document.getElementById("booking").style.display = "block";
        document.getElementById("existingCustForm").style.display = "none";
    }

    render () {

           return (
            <div>
            <h1 className="new-booking-title">New Booking</h1>
            <div id="existingCustForm">
            <ExistingCustomers customers={this.state.customers} handleSelectedCustomer={this.handleCustomer}/>
            </div>
            <div id="newCustForm">
            <NewCustomerForm addCustomer={this.handlePost} seeForm={this.visibleNewCust}/>
            </div>
            <div id="booking">
            <NewBookingForm addBooking={this.handleNewBooking} bookedCustomer={this.state.bookingCustomer} times={this.state.times}/>
            </div>
            </div>
        )
    }
}

export default NewBookingBox;