import React, { Component } from 'react';
import '../../App.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.handleSearchedDate = this.handleSearchedDate.bind(this);
    }

    handleSearchedDate(e){
        this.props.setSearchedDate(e.target.value);
    }


    render() { 
        return ( 
            <div className="search-bar">
            <input type="date" onChange={this.handleSearchedDate}></input>
            </div>
         );
    }
}
 
export default SearchBar;
