import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../component/navbar/Navbar'

export const Login = () => {
    return (
        <>
            <Navbar />   
            <div className="mb-4">
                <Link to="/home" className="d-flex align-items-center m-2 auth__btnvolver">
                    <img className="mr-2" alt="volver" src="/assets/auth/volver.png" />
                    Volver
                </Link>
            </div>
            <div className="auth__main">
                <div className="mt-4">
                    <Link to="/home" className="promocion__btnescanea mb-4">
                        <img className="mr-3" src="/assets/auth/facebook.png" alt="face" />
                        Continuar con facebook
                    </Link>
                    <Link to="/home" className="promocion__btnescanea">
                        <img className="mr-4" src="/assets/auth/google.png" alt="google" />
                        Continuar con google
                    </Link>
                </div>

                <img className="w-100 mt-4" src="/assets/auth/divi.png" alt="div" />
                
                <form>

                    <p className="auth__name-input">Correo electronico:</p>
                    <input
                        className="auth__input" 
                        type="email"
                        name="email"
                    />
    
                    <p className="auth__name-input">Contraseña:</p>
                    <input 
                        className="auth__input"
                        type="password"
                        name="password"
                    />

                    <Link to="/home" className="promocion__btnescanea mt-5">
                        Entrar
                    </Link>

                </form>

                <div className="d-flex justify-content-between mt-4">

                    <p className="auth__footer">¿Olvidaste tu contraseña?</p>

                    <p className="auth__footer">Registrate</p>

                </div>

                
            </div>

        </>
    )
}
