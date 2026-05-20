import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Donador_CategoriasPage } from './pages/Donador_CategoriasPage'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CorporacionesPage } from './pages/CorporacionesPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import { EventosPage } from './pages/EventosPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registrar' element={<Register></Register>}></Route>
        <Route path="/colectas/categorias" element={<Donador_CategoriasPage />} />
        <Route path="/colectas/corporaciones" element={<CorporacionesPage />} />
        <Route path="/colectas/eventos" element={<EventosPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App