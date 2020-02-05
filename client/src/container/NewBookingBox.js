import React, {Component} from 'react';
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingForm from '../component/newBookingComponents/NewBookingForm';
import Request from '../helpers/request';
import './NewBookingBox.css';



class NewBookingBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: [],
            bookingCustomer: "",
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
        request.post('http://localhost:8080/bookings/add', booking)
        .then((booking) => {
            if (!booking.id) {
            window.location = `/bookings/confirm/unsuccessful`    
            }
            else {
                window.location = `/bookings/${booking.id}/confirm`
            }
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
            <NewBookingForm addBooking={this.handleNewBooking} bookedCustomer={this.state.bookingCustomer} times={this.props.times}/>
            </div>
            </div>
        )
    }
}

export default NewBookingBox;