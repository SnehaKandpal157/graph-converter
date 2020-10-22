import React from 'react'

function Header({handleCreatePPT}) {
  return (
    <div className="header-outer-wrap">
      <div className="header-inner-wrap">
      <img className="logo-image" src="https://miro.medium.com/max/5644/1*_rYEpi3Crp_pX0lWBbFeOg.jpeg" alt="logo"/>
      <button onClick={handleCreatePPT} className="export-button">Export PPT</button>
      </div>
    </div>
  )
}

export default Header
