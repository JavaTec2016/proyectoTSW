import React from 'react'

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{width: "100%", maxWidth:"400px"}}>
            
            <form method="post" role="form">
              
                <h2 className="text-center mb-4"> Inicie sesion</h2>
        
                    <div className="mb-3">
                    <label className='form-label' htmlFor="">Usuario: </label>
                    <input className='form-control' type="text" name='usuario' id='usuario' />
                    <label className='form-label' htmlFor="">Contraseña: </label>
                    <input className='form-control' type="text" name='password' id='password' />
                    </div>
                    <br />
                <input type="submit" value="Ingresar" className="btn btn-primary full-width w-100"/>
            </form>
            <br />
            <hr />
            <span className='text-center'>No tiene una cuenta? <a href="/registrar">Registrese</a></span>
        </div>
    </div>
  )
}

export default Login;