import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {ChartData, GraphColor} from "../Constant";

const state = {
  labels: ChartData[0].labels,
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: GraphColor,
      // borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: ChartData[0].values
    }

  ]
}

const barChart = (
  <Bar
    data={state}
    options={{
      title: {
        display: true,
        text: 'Fruits',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'right',
        fontSize: 25
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 25,
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 25,
          }
        }]
      }
    }}
  />
)

const doughNut = (
  <Doughnut
    data={state}
    options={{
      title: {
        display: true,
        text: 'Fruits',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'right'
      }
    }}
  />
)

function Chart({ showDonut }) {
  return (
    <div className="chart-wrap">
      {showDonut ? doughNut : barChart}
    </div>
  )
}

export default Chart
