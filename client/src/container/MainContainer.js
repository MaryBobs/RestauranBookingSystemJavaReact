import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingSystemBox from './BookingSystemBox.js';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
        <NavBar />
      <Switch>
        <Route path="/bookings" component={BookingSystemBox}/>
        <Route path="/newbooking" component={NewBookingBox}/>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;