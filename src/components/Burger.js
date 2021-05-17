import React from 'react'

const Burger = ({ open, setOpen }) => {
    return (
        <div className="StyledBurger" onClick={() => setOpen(!open)}>
            <div className="burgerSlice" />
            <div className="burgerSlice" />
            <div className="burgerSlice" />
        </div>
    )
}

export default Burger
