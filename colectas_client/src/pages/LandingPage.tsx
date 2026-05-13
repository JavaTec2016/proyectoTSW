import React from 'react'
import { Navigation } from '../components/Navigation'
import { Nav } from 'react-bootstrap'
function LandingPage() {
  return (
    <div className='app-shell'>
            <Navigation>
                <Nav.Link href="#top">Inicio</Nav.Link>
                <Nav.Link href="/colectas/categorias">Categorias</Nav.Link>
                <Nav.Link href="/colectas/corporaciones">Corporaciones</Nav.Link>
            </Navigation>

    </div>
  )
}

export default LandingPage