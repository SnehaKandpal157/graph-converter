import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { ChartData, GraphColor } from "../Constant";

const state = {
  labels: ChartData[0].labels,
  datasets: [
    {
      backgroundColor: GraphColor,
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
        fontColor: "#00000",
        labels: {
          fontSize: 18,
          boxWidth: 18,
          fontColor: "#000000",
          generateLabels: function (chart) {
            var labels = chart.data.labels;
            var dataset = chart.data.datasets[0];
            var legend = labels.map(function (label, index) {
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
            max: 35,
          },
          gridLines: {
            color: "#817e7d",
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 25,
          },
          gridLines: {
            color: "#817e7d"
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
        labels: {
          fontSize: 18,
          boxWidth: 20,
          fontColor: "#000000",
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
