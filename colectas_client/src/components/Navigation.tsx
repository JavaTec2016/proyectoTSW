import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to='/'><h1>Colectas</h1></Link>
        <Link to='/categorias'>Categorias</Link>
    </div>
  )
}