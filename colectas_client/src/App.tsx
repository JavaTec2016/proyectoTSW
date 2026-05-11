import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Donador_CategoriasPage } from './pages/Donador_CategoriasPage'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/categorias' element={<Donador_CategoriasPage/>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App