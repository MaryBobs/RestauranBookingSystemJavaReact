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
    }

    componentDidMount() {
        const url = 'http://localhost:8080/customers';
    
        fetch(url)
          .then(res => res.json())
          .then(customers => this.setState({ customers: customers._embedded.customers }))
          .catch(err => console.err);
      }

    // componentDidMount(){
    //     const request = new Request();

    //     request.get('/customers')
    //     .then((data) => {
    //         this.setState({customers: data._embedded})
    //     })
    // }

    render () {
        return (
            <div>
            <h1>New Booking</h1>
            <ExistingCustomers customers={this.state.customers} />
            <NewCustomerForm />
            <NewBookingDetails />
            </div>
        )
    }
}

export default NewBookingBox;