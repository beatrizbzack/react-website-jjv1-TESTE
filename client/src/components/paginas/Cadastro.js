import React from 'react'
import Footer from '../Footer'
import { Button } from '../Button'
import '../../App.css'
import './stylespg/Cadastro.css'

function Cadastro() {
  return (
    <>
    <div className='dir-cadastro'>
      <h1 >JJ ESTÉTICA</h1>
      <p> Realçando a Sua Beleza</p>
      <h2> Novo Cadastro</h2>
      <Button
        className='btns'
        buttonStyle='btn--paciente'
        buttonSize='btn--large'
        tipo='pacienteCad'
      >
        Sou Paciente
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--clinica'
        buttonSize='btn--large'
        tipo='clinicaCad'
      >
        Sou Clinica
      </Button>
    </div>
    <Footer/>
    </>
  )
}

export default Cadastro