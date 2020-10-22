import React from 'react';
import Collapsible from 'react-collapsible';
import {
  Link
} from "react-router-dom";

function Sidebar({ toggleChart }) {
  return (
    <div className="collapsible-wrap">
      <Collapsible trigger="Chart Selector" open={true}>
      <Link to="/vertical-bar-chart" className="collapsible-content"><span  onClick={() => toggleChart(false)}>Vertical Bar Chart</span></Link>
      <Link to="/donut-chart" className="collapsible-content"> <span  onClick={() => toggleChart(true)}>Donut Chart</span></Link>
      </Collapsible>
    </div>
  )
}

export default Sidebar
