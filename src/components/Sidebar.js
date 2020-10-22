import React from 'react';
import Collapsible from 'react-collapsible';
import {
  Link
} from "react-router-dom";

function Sidebar({ toggleChart }) {
  return (
    <div className="collapsible-wrap">
      <Collapsible trigger="Chart Selector" open={true}>
      <span className="collapsible-content"><Link to="/vertical-bar-chart" onClick={() => toggleChart(false)}>Vertical Bar Chart</Link></span>
       <span className="collapsible-content"><Link to="/donut-chart" onClick={() => toggleChart(true)}>Donut Chart</Link></span>
      </Collapsible>
    </div>
  )
}

export default Sidebar
