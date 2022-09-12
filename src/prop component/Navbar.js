import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(prop) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <Link className="navbar-brand" to="/"><strong>{prop.name}</strong></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/">{prop.home}<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">{prop.about}<span className="sr-only">(current)</span></Link>
      </li>


    </ul>
  </div>
  <div className="custom-control custom-switch">
  <input type="checkbox" onClick={prop.toggleMode} className="custom-control-input" id="customSwitch1" />
  <label className="custom-control-label" htmlFor="customSwitch1">Mode</label>
</div>
</nav>
    </div>
  )
}



Navbar.propTypes = {
  name: PropTypes.string.isRequired
}

Navbar.defaultProps ={
name : "home",
about : "about"
}
