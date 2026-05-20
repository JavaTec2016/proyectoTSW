import React, { useState } from 'react'

function Register() {
    const [passMatch, setPassMatch] = useState(false);
    function matchea(){
        const p1 = document.getElementById('password') as HTMLInputElement;
        const p2 = document.getElementById('passwordConfirm') as HTMLInputElement;
        setPassMatch(p1.value == p2.value)
        return passMatch;
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{width: "100%", maxWidth:"400px"}}>
            
            <form method="post" role="form" onSubmit={()=>matchea()}>
              
                <h2 className="text-center mb-4"> Inicie sesion</h2>
        
                    <div className="mb-3">
                    <label className='form-label' htmlFor="usuario">Usuario: </label>
                    <input className='form-control' type="text" name='usuario' id='usuario' />
                    <label className='form-label'  htmlFor="password">Contraseña: </label>
                    <input className='form-control'  type="text" name='password' id='password' />
                    <label className='form-label'  htmlFor="passwordConfirm">Confirmar contraseña: </label>
                    <input className='form-control'  type="text" name='passwordConfirm' id='passwordConfirm' />
                    {passMatch && (<p className='text-danger'>Las contraseñas no coinciden</p>)}
                    </div>
                    <br />
                <input type="submit" value="Registrarse" className="btn btn-primary full-width w-100"/>
            </form>
            <br />
            <hr />
            <span className='text-center'>Ya tiene una cuenta? <a href="/login">Inicie sesion</a></span>
        </div>
    </div>
  )
}

export default Register