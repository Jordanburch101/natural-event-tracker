import React from 'react'

const Menu = ({ open }) => {
    return (
        <div className={`${open ? "open" : "closed"} StyledMenu`}>
            <a target="_blank" rel="noreferrer" href="https://earthobservatory.nasa.gov/">
            <span>📡</span>
            Learn About EO
            </a>
            <a target="_blank" rel="noreferrer" href="https://eonet.sci.gsfc.nasa.gov/">
            <span>🛰️</span>
            About EONET
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Jordanburch101/natural-event-tracker">
            <span>📁</span>
            View Code
          </a>
      </div>
    )
}

export default Menu
