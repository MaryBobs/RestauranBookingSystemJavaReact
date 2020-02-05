import React, {Component} from 'react';

class ConfirmBooking extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
        render(){
        return(
        <div className="successful-booking">
        <h1>Booking Successful!</h1>
        <p>
        <img src="/tyrannosaurus.jpg"></img>
        </p>
        {/* <h3>{booking.adultsCovers}</h3> */}
        {/* <h3>{props.confirmedBooking.date}</h3>
        <h3>{props.confirmedBooking.kidsCovers}</h3> */}
        </div>
        )
    }
}

export default ConfirmBooking;