import React, {Component} from 'react';
import { Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartdata: {}
        }

       
    }

    // componentDidMount(){
    //     this.setChartData();
    // }

    // sortData(){
    //     console.log(this.props.bookings);
        
    //     if(this.props.bookings.size > 0){
    //         const coversData =  this.props.bookings.forEach(booking => {
    //             console.log(booking);
    //             const total = 0;
    //             total += (booking.adultsCovers + booking.kidsCovers)
    //             return total;
    //         })
    //     }
    //     return 0
    // } 

    // setChartData(){
    //     const coversArray = this.sortData();
    //     console.log(coversArray);
    //     this.setState({
    //         chartdata:{
    //             labels: ['Monday' ],
    //             datasets: [
    //                 {
    //                     label: 'Covers',
    //                     data: coversArray,
    //                     backgroundColor:[
    //                         'rgba(255, 99, 132, 0.6)',
    //                         'rgba(54, 162, 235, 0.6)', 
    //                         'rgba(255, 206, 85, 0.6)',
    //                         'rgba(75, 192, 192, 0.6)',
    //                         'rgba(153, 102, 255, 0.6)',
    //                         'rgba(255, 159, 64, 0.6)',
    //                         'rgba(255, 99, 132, 0.6)'
    //                     ]
    //                 }

    //             ]
    //         }
    //     })
    // }


    render(){
        return (
            <div className="chart">

                <Line
                data={this.state.chartdata}
            
                options={{ 
                    title:{
                        display: true,
                        text: 'Covers per day',
                        fontSize: 25

                    },
                    legend:{
                        display: true, 
                        position: 'right'
                    }
                     }}
                />


            </div>
        )
    }

}

export default Chart;
