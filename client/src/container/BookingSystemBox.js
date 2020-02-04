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
      chartdata: [],
      hours: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]
    }

    this.setSearchedDate = this.setSearchedDate.bind(this);
    this.getSearchedBookings = this.getSearchedBookings.bind(this);
    this.sortCoverData = this.sortCoverData.bind(this);
    this.setChartData = this.setChartData.bind(this);
    this.sortLabelData = this.sortLabelData.bind(this);
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

  getSearchedBookings(date) {
    const request = new Request();

    request.get("http://localhost:8080/bookings/byDate/" + date)
      .then((data) => {
        this.setState({ filteredBookings: data })
      })
      .then(() => this.setChartData())
  }

  sortCoverData(){
    let coversData = []
    this.state.hours.forEach(hour => {
      let foundBooking = false;
      this.state.filteredBookings.forEach(booking => {
        // console.log(hour.substring(0,2))
        // console.log(booking.time.substring(0,2))
        if(hour.substring(0,2) === booking.time.substring(0,2)){
          let total = 0;
          total += booking.adultsCovers + booking.kidsCovers
          coversData.push(total);
          foundBooking = true;
        }
      })
      if(foundBooking == false){
        coversData.push(0);
      }
    })
    console.log(coversData);
    return coversData;
  } 

  sortLabelData(){
    let labelData = [];
    this.state.filteredBookings.forEach(booking => {
      labelData.push(booking.time)
    })
    return labelData;
  }

  setChartData(){
      const coversArray = this.sortCoverData();
      const labelData = this.sortLabelData();
      console.log(coversArray);
      this.setState({
          chartdata:{
              labels: this.state.hours,
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
                <Chart chartData={this.state.chartdata}/>
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