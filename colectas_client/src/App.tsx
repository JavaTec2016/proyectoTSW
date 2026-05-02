import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Donador_CategoriasPage } from './pages/Donador_CategoriasPage'
import { Donador_CategoriasFormPage } from './pages/Donador_CategoriasFormPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/categorias' element={<Donador_CategoriasPage/>} />
        <Route path='/categorias/crear' element={<Donador_CategoriasFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App