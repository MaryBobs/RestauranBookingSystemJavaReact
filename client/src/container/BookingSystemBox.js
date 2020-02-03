import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingDetails from '../component/newBookingComponents/NewBookingDetails';
import Request from '../helpers/request';

class BookingSystemBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount(){
        const request = new Request();

        request.get('http://localhost:8080/customers')
        .then((data) => {
            this.setState({customers: data._embedded.customers})
        })
    }
    render (){
        return (
            <div>
                <h1>Upcoming Bookings</h1>
                
            </div>
        )
    }
}

export default BookingSystemBox;