import React from 'react';
import Collapsible from 'react-collapsible';

function Sidebar({ toggleChart }) {
  return (
    <div className="collapsible-wrap">
      <Collapsible trigger="Chart Selector">
        <span className="collapsible-content" onClick={() => toggleChart(false)}>Vertical Bar Chart</span>
        <span className="collapsible-content" onClick={() => toggleChart(true)}>Donut Chart</span>
      </Collapsible>
    </div>
  )
}

export default Sidebar
