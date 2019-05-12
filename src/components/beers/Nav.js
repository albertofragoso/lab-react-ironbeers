import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar has-background-info">
      <div className="container">
        <div className="navbar-brand">
          <Link to='/'>
            <span className="icon is-large has-text-white">
              <i className="fas fa-home"></i>
              Home
            </span>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/">
              <span className="icon is-large has-text-white">
                <i className="fas fa-home"></i>
                Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav 
