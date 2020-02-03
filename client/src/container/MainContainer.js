import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingItemBox from './BookingItemBox.js';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
        <NavBar />
      <Switch>
        <Route path="/bookings" component={BookingItemBox}/>
        <Route path="/newbooking" component={NewBookingBox}/>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;