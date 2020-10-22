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
        position: 'bottom',
        fontSize: 25,
        labels:{
          fontSize:16,
          boxWidth:14,
          fontColor:"#000000",
          generateLabels:function(chart) {
            var labels = chart.data.labels;
            var dataset = chart.data.datasets[0];
            var legend = labels.map(function(label, index) {
               return {
                  datasetIndex: 0,
                  fillStyle: dataset.backgroundColor && dataset.backgroundColor[index],
                  strokeStyle: dataset.borderColor && dataset.borderColor[index],
                  lineWidth: dataset.borderWidth,
                  text: label
               }
            });
            return legend;
         }
        }
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
        position: 'bottom',
        labels:{
          fontSize:18,
          boxWidth:20,
          fontColor:"#000000",
        }
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
