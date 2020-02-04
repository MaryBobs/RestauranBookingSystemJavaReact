import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';
import Request from '../helpers/request';
import BookingPage from '../component/BookingSystemComponents/BookingPage';
import ShowBooking from '../component/BookingSystemComponents/ShowBooking';
import EditBookingForm from '../component/BookingSystemComponents/EditBookingForm';
import SearchBar from '../component/BookingSystemComponents/SearchBar'

class BookingSystemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      filteredBookings: [],
      searchedDate: ""
    }

    this.deleteBookingById = this.deleteBookingById.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.setSearchedDate = this.setSearchedDate.bind(this);
    this.getSearchedBookings = this.getSearchedBookings.bind(this);
  }

  componentDidMount() {
    const formattedDate = this.getTodayDate();
    this.getSearchedBookings(formattedDate);
  }

  findBookingById(id) {
    return this.state.filteredBookings.find((booking) => {
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

  updateBooking(booking, id){
      const request = new Request();
      request.patch(`http://localhost:8080/bookings/${id}`, booking)
      .then(() => {
          window.location = "/bookings"
      })
  }
  getTodayDate(){
    const dateJavascript = new Date();
    const year = dateJavascript.getFullYear();
    const month = dateJavascript.getMonth() + 1;
    const date = dateJavascript.getDate();
    const formattedDate = year + "-" + month + "-" + date;
    return formattedDate;
  }

  setSearchedDate(date){
    if(date.length > 5){
      this.setState({ searchedDate: date })
      this.getSearchedBookings(date);
    } else {
      const todayDate = this.getTodayDate();
      this.getSearchedBookings(todayDate);
    }
  }

  getSearchedBookings(date){
    const request = new Request();

    request.get("http://localhost:8080/bookings/byDate/" + date)
      .then((data) => {
        this.setState({ filteredBookings: data })
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
                <SearchBar setSearchedDate={this.setSearchedDate}/>
                <BookingPage bookings={this.state.filteredBookings} />
            </Route>

            <Route exact path="/bookings/:id" render={(props) => {
                const booking = this.findBookingById(props.match.params.id);
                return <ShowBooking booking={booking} deleteBooking={this.deleteBookingById}/>
            }}/>
            
            <Route exact path="/bookings/:id/edit" render={(props) => {
                const id = props.match.params.id
                const booking = this.findBookingById(id);
                return <EditBookingForm booking={booking} handleUpdate={this.updateBooking}/>
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