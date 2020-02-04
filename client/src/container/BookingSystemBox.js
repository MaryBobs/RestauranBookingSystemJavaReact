import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';
import Request from '../helpers/request';
import BookingPage from '../component/BookingSystemComponents/BookingPage';
import ShowBooking from '../component/BookingSystemComponents/ShowBooking';

class BookingSystemBox extends Component {
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

  findBookingById(id) {
    return this.state.bookings.find((booking) => {
      return booking.id === parseInt(id)
    });
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
              <Route path="/bookings/:id" render={routeProps => {
                return (
                  <ShowBooking booking={this.state.bookings.find(booking => {
                    return booking.id === parseInt(routeProps.match.params.id);
                  })} />
                )
              }}>
                
                </Route>
              <Route path="/newbooking" component={NewBookingBox} />
            </Switch>


          </Fragment>
        </Router>

      </div>
    )
  }
}

export default BookingSystemBox;