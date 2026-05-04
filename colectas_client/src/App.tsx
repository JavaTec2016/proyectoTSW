import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Donador_CategoriasPage } from './pages/Donador_CategoriasPage'
import { Navigation } from './components/Navigation'
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        
        <Route path='/categorias' element={<Donador_CategoriasPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App