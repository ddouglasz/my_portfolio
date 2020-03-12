import React from 'react'

const Navbar = () => {
    return (
      <>
        <div id="side" className="side-menu">
        <div className="nav-space">
        <a href="/Projects">Projects</a>
        </div>
        <div className="nav-space">
        <a href="/about">About Me</a>
        </div>
        <div className="nav-space">
        <a href="/contact">Contact Me</a>
        </div>
        </div>
      </>
    )
}

export default Navbar