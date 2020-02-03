import React, {Component} from 'react';
import Bookings from './Bookings'
import DateFilter from './DateFilter';
import '../../style/BookingList.css';

class BookingList extends Component {
    render() {
        return (
            <div className= "bookings-list">
                <Bookings></Bookings>
                <DateFilter></DateFilter>
                {/* <div>
                    {props.customers.map((customer, customerId) => {
                        return (
                            <Song
                                key={customerId}
                                firstName={customer.firstName}
                                lastName={customer.lastName}
                                phoneNumber={customer.phoneNumber}
                                emailAddress={customer.emailAddress}
                            />
                        )
                    })}
                </div> */}
            </div>
        )
    }
}

export default BookingList;