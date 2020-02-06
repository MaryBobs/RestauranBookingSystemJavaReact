import React, { Component } from 'react'
import '../../App.css';


    class UpcomingEvents extends Component{
        render (){
            return(
                <div className="Upcoming">
                    <h2>Upcoming Events</h2>
                    <ul>
                        <li>Margarita Mondays
                        <img alt="advert for Margarita Mondays event" src="https://i.pinimg.com/originals/33/8f/8a/338f8a9f22fe8a1bdfd70af921537bab.jpg"></img>
                        </li>
                        <li>Taco Tuesdays
                        <img alt="advert for Taco Tuesdays event" src="https://am21.akamaized.net/tms/cnt/uploads/gallery/jurassic-sweet/jurassicsweet2.jpg" ></img>
                        </li>
                        <li>Wing-a-long Wednesdays
                        <img alt="advert for Wing-a-long event" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7c995722320959.563150a33de42.jpg"></img>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    export default UpcomingEvents;