import React from 'react'

const Menu = ({ open }) => {
    return (
        <div className={`${open ? "open" : "closed"} StyledMenu`}>
            <a href="/">
            <span role="img" aria-label="about us">🌌</span>
            Learn About EO
            </a>
            <a href="/">
            <span role="img" aria-label="price">🛰️</span>
            About EONET
            </a>
            <a href="/">
            <span role="img" aria-label="contact">📁</span>
            View Code
          </a>
      </div>
    )
}

export default Menu
