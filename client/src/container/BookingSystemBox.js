import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';
import Request from '../helpers/request';
import BookingPage from '../component/BookingSystemComponents/BookingPage';
import ShowBooking from '../component/BookingSystemComponents/ShowBooking';
import Chart from '../component/BookingSystemComponents/Chart';
import SearchBar from '../component/BookingSystemComponents/SearchBar'


class BookingSystemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      filteredBookings: [],
      searchedDate: "",
      chartdata: []
    }

    this.setSearchedDate = this.setSearchedDate.bind(this);
    this.getSearchedBookings = this.getSearchedBookings.bind(this);
    this.sortData = this.sortData.bind(this);
    this.setChartData = this.setChartData.bind(this);
  }

  componentDidMount() {
    const formattedDate = this.getTodayDate();
    this.getSearchedBookings(formattedDate);
    this.setChartData();
  }

  findBookingById(id) {
    return this.state.bookings.find((booking) => {
      return booking.id === parseInt(id)
    });
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


  sortData(){
    console.log(this.state.filteredBookings);
    
    if(this.state.filteredBookings.size > 0){
        const coversData =  this.state.filteredBookings.forEach(booking => {
            console.log(booking);
            const total = 0;
            total += booking.adultsCovers + booking.kidsCovers
            return total;
        })
    }
    return 0
  } 

  setChartData(){
      const coversArray = this.sortData();
      console.log(coversArray);
      this.setState({
          chartdata:{
              labels: ['Monday'],
              datasets: [
                  {
                      label: 'Covers',
                      data: coversArray,
                      backgroundColor:[
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)', 
                          'rgba(255, 206, 85, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(255, 99, 132, 0.6)'
                      ]
                  }

              ]
          }
      })
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
                <Chart bookings={this.state.filteredBookings}/>
              </Route>
              <Route path="/bookings/:id" render={routeProps => {
                return (
                  <ShowBooking booking={this.state.filteredBookings.find(booking => {
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