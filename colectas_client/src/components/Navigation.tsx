import type React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function Navigation({brandContent, children}:{brandContent?:React.ReactNode, children?:React.ReactNode}) {
  return (
    <Navbar expand="md" sticky="top" className="navbar app-navbar">
      <div className="container-fluid">
        {brandContent ? brandContent : (
          <Navbar.Brand className="navbar-text" href="/">
            Landing
          </Navbar.Brand>
        )}
        
        <div className="navbar-divider"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {children}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}