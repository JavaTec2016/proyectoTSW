import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navbar app-navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand navbar-text" href="/">Colectas</a>
        <div className='navbar-divider'></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-links">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Inicio</a>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  )
}