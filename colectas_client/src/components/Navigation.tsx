import { Nav, Navbar } from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar expand="md" sticky="top" className="navbar app-navbar">
      <div className="container-fluid">
        <Navbar.Brand className="navbar-text" href="/">Colectas</Navbar.Brand>
        <div className="navbar-divider"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#top">Inicio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}