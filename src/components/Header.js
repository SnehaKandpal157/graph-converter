import React from 'react'

function Header({handleCreatePPT}) {
  return (
    <div className="header-outer-wrap">
      <div className="header-inner-wrap">
      <img className="logo-image" src="https://freeyourfitness24.com/wp-content/uploads/2018/01/Graph-Icon.png" alt="logo"/>
      <button onClick={handleCreatePPT} className="export-button">Export PPT</button>
      </div>
    </div>
  )
}

export default Header
