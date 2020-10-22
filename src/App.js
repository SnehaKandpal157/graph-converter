import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import pptxgen from "pptxgenjs";
import { ChartData, ChartOptions } from "./Constant";

function App() {
  const [showDonut, setShowDonut] = useState(false)
  const toggleChart = (value) => {
    setShowDonut(value)
  }

  const createPPT = () => {
    let pptx = new pptxgen();
    let slide = pptx.addSlide();
    const chartType = showDonut ? pptx.ChartType.doughnut : pptx.ChartType.bar;

    slide.addChart(
      chartType, ChartData, ChartOptions);

    pptx.writeFile('Graph-PPT');
  }

  return (
    <div className="App">
      <Header handleCreatePPT={createPPT} />
      <div className="content-wrap">
        <Sidebar toggleChart={toggleChart} />
        <Chart showDonut={showDonut} />
      </div>
    </div>
  );
}

export default App;
