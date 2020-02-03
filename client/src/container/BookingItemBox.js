import React, {Component} from 'react';
import BookingList from '../component/bookingSystemComponents/BookingList';
import '../style/BookingItemBox.css';
import Request from '../helpers/request';


class BookingItemBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        const request = new Request();

        request.get('http://localhost:8080/bookings')
            .then((data) => {
                this.setState({ bookings: data._embedded.bookings })
            })
    }

    render(){
        return(
            <div className='booking-item-box'>
                <BookingList booking={this.state.bookings}/>
                <p>Booking Item List</p>
            </div>
        )
    }
}

export default BookingItemBox;