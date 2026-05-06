import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex py-3'>
        <Link to='/'><h1 className='font-bold text-3xl mb-4'>Colectas</h1></Link>
        <Link to='/categorias' className='px-3 py-2'>Categorias</Link>
    </div>
  )
}