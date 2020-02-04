import React, { Component } from 'react';

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
            <input type="date" onChange={this.handleSearchedDate}></input>
         );
    }
}
 
export default SearchBar;
