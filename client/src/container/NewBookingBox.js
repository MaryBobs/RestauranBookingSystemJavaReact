import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingDetails from '../component/newBookingComponents/NewBookingDetails';
import Request from '../helpers/request';

class NewBookingBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: []
        }

        this.handlePost = this.handlePost.bind(this);
    }

    componentDidMount(){
        const request = new Request();

        request.get('http://localhost:8080/customers')
        .then((data) => {
            this.setState({customers: data._embedded.customers})
        })
    }

    handlePost(customer){
        const request = new Request();
        request.post('http://localhost:8080/customers', customer).then(() => {
            window.location = '/newbooking'
        })
    }

    render () {
        return (
            <div>
            <h1>New Booking</h1>
            <ExistingCustomers customers={this.state.customers} />
            <NewCustomerForm addCustomer={this.handlePost}/>
            <NewBookingDetails />
            </div>
        )
    }
}

export default NewBookingBox;