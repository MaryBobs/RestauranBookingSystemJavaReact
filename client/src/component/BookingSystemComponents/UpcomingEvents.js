import React, { Component } from 'react'
import '../../App.css';


    class UpcomingEvents extends Component{
        render (){
            return(
                <div className="Upcoming">
                    <h2>Upcoming Events</h2>
                    <ul>
                        <li>Margarita Mondays
                        <img src="https://i.pinimg.com/originals/33/8f/8a/338f8a9f22fe8a1bdfd70af921537bab.jpg"></img>
                        </li>
                        <li>Taco Tuesdays
                        <img src="https://am21.akamaized.net/tms/cnt/uploads/gallery/jurassic-sweet/jurassicsweet2.jpg" ></img>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    export default UpcomingEvents;