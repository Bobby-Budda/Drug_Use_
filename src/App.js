import React, { Component } from 'react';
import logo from './PillsLogo.jpeg';
import './App.css';
import Chart from './components/Chart';

import { DrugUseProvider } from './drug-use-context';
import Dummy from './Dummy'

/*import {scaleLinear} from 'd3-scale';*/



class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Age', 'Mari', 'Weed', 'Drugs', 'Pills', 'New High'],
        datasets:[
          {
            label:'NewLabel',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],

          
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
          
        ]
      }
    });
  }

  render() {
    return (
      <DrugUseProvider> 
        <Dummy> </Dummy>
      {/* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drug use by Age</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Age" legendPosition="bottom"/>
      </div> */}
      </DrugUseProvider>
    );
  }
 /* d3.csv('drug-use-by-age.csv')
  .then(makeChart);

function makeChart(players) {
}*/
}



export default App;