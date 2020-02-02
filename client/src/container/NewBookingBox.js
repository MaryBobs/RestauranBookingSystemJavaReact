import React, {Component} from 'react';
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingDetails from '../component/newBookingComponents/NewBookingDetails';

class NewBookingBox extends Component {
    render () {
        return (
            <div>
            <h1>New Booking</h1>
            <ExistingCustomers />
            <NewCustomerForm />
            <NewBookingDetails />
            </div>
        )
    }
}

export default NewBookingBox;