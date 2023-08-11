import React from 'react'
import Footer from '../Footer'
import { Button } from '../Button'
import '../../App.css'
import './stylespg/Login.css'

function Login() {
  return (
    <>
    <div className='dir-login'>
      <h1 >JJ ESTÉTICA</h1>
      <p> Realçando a Sua Beleza</p>
      <Button
        className='btns'
        buttonStyle='btn--paciente'
        buttonSize='btn--large'
        tipo='paciente'
      >
        Sou Paciente
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--clinica'
        buttonSize='btn--large'
        tipo='clinica'
      >
        Sou Clinica
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--cadastro'
        buttonSize='btn--large'
        tipo='cadastro'
      >
        Cadastrar
      </Button>
    </div>
    <Footer /> 
    </>


  )
}

export default Login