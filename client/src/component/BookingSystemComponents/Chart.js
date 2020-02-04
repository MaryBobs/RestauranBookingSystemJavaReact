import React, {Component} from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="chart">

                <Line
                data={this.props.chartData}
            
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
