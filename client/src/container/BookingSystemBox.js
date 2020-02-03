import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Bookings from '../component/BookingSystemComponents/Bookings';
import Request from '../helpers/request';

class BookingSystemBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount(){
        const request = new Request();

        request.get('http://localhost:8080/bookings')
        .then((data) => {
            this.setState({bookings: data._embedded.bookings})
        })
    }

    render (){
        return (
            <div>
                <h1>Upcoming Bookings</h1>
                <Bookings bookings = {this.state.bookings}/>

            </div>
        )
    }
}

export default BookingSystemBox;