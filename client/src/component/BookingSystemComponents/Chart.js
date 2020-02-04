import React, {Component} from 'react';
import { Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartdata:{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday' ],
                datasets: [
                    {
                        label: 'Covers',
                        data: [
                            5, 
                            8, 
                            2,
                            9,
                            23,
                            19,
                            12
                        ],
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
            },
            pieData: {
                labels: ['Adults', 'Children'], 
                datasets: [
                    {
                        label: 'Adult v Children Covers', 
                        data: [
                            60,
                            40
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)', 
                        ]
                    }
                ]
            }
        }
    }


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
                <Pie
                   data={this.state.pieData} 

                   options={{
                       title:{
                           display: true, 
                           text: 'Adult covers vs Children Covers', 
                           fontSize: 25
                       },
                       legend: {
                           display: true, 
                           position: 'top',
                           align: 'center'
                       }
                   }}
                />


            </div>
        )
    }

}

export default Chart;
