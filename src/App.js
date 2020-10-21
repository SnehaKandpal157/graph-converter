import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import pptxgen from "pptxgenjs";
import { ChartData, Color } from "./Constant";

function App() {
  const [showDonut, setShowDonut] = useState(false)
  const toggleChart = (value) => {
    setShowDonut(value)
  }

  const createPPT = () => {
    let pptx = new pptxgen();
    let slide = pptx.addSlide();
    const chartOptions = {
      x: 1.5,
      y: 1,
      w: 7,
      h: 4,
      chartColors: Color,
      title: "Fruits",
      lineSize: 3,
      barGapWidthPct: 35,
    };

    slide.addChart(
      showDonut ? pptx.ChartType.doughnut : pptx.ChartType.bar, ChartData, chartOptions);

    pptx.writeFile('PptxGenJs-Basic-Slide-Demo');
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
