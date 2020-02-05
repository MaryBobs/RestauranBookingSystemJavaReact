import React, {Component} from 'react';
import '../../App.css';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Visits'],
                datasets: [
                    {
                        label: 'number of visits',
                        data: [
                            3
                            
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
            }
        }
    }

    render(){
        return (
            <div className="chart"style={{position: "relative", width: 500, height:550}} >

            <Bar 
                data= {this.state.chartData}
                      
                options={{ 
                    title:{
                        display: true,
                        text: 'Number of visits',
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

export default BarChart;
