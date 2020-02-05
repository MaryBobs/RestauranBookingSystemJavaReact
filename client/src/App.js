import React, { Component } from 'react';
import './App.css';
import BookingSystemBox from './container/BookingSystemBox';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div>
      <BookingSystemBox />
      </div>
    );
  }
}

export default App;
