import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Donador_CategoriasPage } from './pages/Donador_CategoriasPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Container>
      <Navigation />
      <hr />
      <Routes>
        <Route path='/categorias' element={<Donador_CategoriasPage/>} />
      </Routes>
      <Toaster />
      </Container>
    </BrowserRouter>
  )
}

export default App