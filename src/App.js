import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import pptxgen from "pptxgenjs";

function App() {
  const [showDonut, setShowDonut] = useState(false)
  const toggleChart = (value) => {
    setShowDonut(value)
  }

  const createPPT = () => {
    let pptx = new pptxgen();
    let slide = pptx.addSlide();

    let dataChartAreaLine = [
      {
        name: "Actual Sales",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121],
      }
    ];

    slide.addChart(pptx.ChartType.bar, dataChartAreaLine);
  }

  return (
    <div className="App">
      <Header handleCreatePPT={createPPT}/>
      <div className="content-wrap">
        <Sidebar toggleChart={toggleChart} />
        <Chart showDonut={showDonut} />
      </div>
    </div>
  );
}

export default App;
