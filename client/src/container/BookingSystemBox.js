import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';
import Request from '../helpers/request';
import BookingPage from '../component/BookingSystemComponents/BookingPage';
import ShowBooking from '../component/BookingSystemComponents/ShowBooking';
import EditBookingForm from '../component/BookingSystemComponents/EditBookingForm';

class BookingSystemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }

    this.deleteBookingById = this.deleteBookingById.bind(this);
  }

  componentDidMount() {
    const request = new Request();

    request.get('http://localhost:8080/bookings')
      .then((data) => {
        this.setState({ bookings: data._embedded.bookings })
      })
  }

  findBookingById(id) {
    return this.state.bookings.find((booking) => {
      return booking.id === parseInt(id)
    });
  }

  deleteBookingById(booking){
    const request = new Request();
    request.delete(booking)
    .then(() => {
      window.location = "/bookings"
    })
  }

  render() {
    return (
      <div>
        <h1>Upcoming Bookings</h1>
        <Router>
        <Fragment>
        <NavBar />
        <Switch>

            <Route exact path="/bookings">
                <BookingPage bookings={this.state.bookings} />
            </Route>

            <Route exact path="/bookings/:id" render={(props) => {
                const booking = this.findBookingById(props.match.params.id);
                return <ShowBooking booking={booking} deleteBooking={this.deleteBookingById}/>
            }}/>
            
            <Route exact path="/bookings/:id/edit" render={(props) => {
                const id = props.match.params.id
                const booking = this.findBookingById(id);
                return <EditBookingForm booking={booking} />
            }} />

              <Route path="/newbooking" component={NewBookingBox} />
            
            </Switch>
            </Fragment>
            </Router>

      </div>
    )
  }
}

export default BookingSystemBox;