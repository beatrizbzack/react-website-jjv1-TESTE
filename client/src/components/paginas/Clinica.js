import React, { useState } from 'react' // uso do hook para armazenar os valores de login
import Footer from '../Footer'
import './stylespg/Clinica.css'
import Axios from "axios"
import { Link } from 'react-router-dom'  


function LoginClinica() {

  // SETTERS dos valores das variaveis em vazio antes de preencherem 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  
  const handleLogin = (e) =>{
    e.preventDefault(); // parre de fazer a ação padrão - vai enviar os dados 
    console.log('submit', {email, password}); 

    Axios.post("http://localhost:3001/LoginClinica", {
      email:email,
      password:password,
    }).then((response) => {
      alert(response.data.msg);
    });

  }; 


  return (
    <>
    <div id='login' className='login-clinica'>
      <h1 className='title'>Login Clinica</h1>
      <form className='form' onSubmit={handleLogin}>
        <div className='field'> {/* email */}
          <label htmlFor='email'>Email Clinica:</label>
          <input 
          type='email' 
          name='email' 
          id='email' 
          value={email} // seta o valor do campo com o que tem em state 
          onChange={(e) => setEmail(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/*senha*/}
          <label htmlFor='password'>Senha:</label>
          <input 
          type='password' 
          name='password' 
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='Link'>
        <Link to='/resetSenha'className='esqueceu-senha'>
          esqueci minha senha
        </Link>
        </div>
        <div className='actions'> {/* entrar - botão */}
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default LoginClinica

// PARA TESTE:
// Clinica 
//   itaim
//   itaim@jjestetica.com
//   11-3232-3232
//   11-90909-0909
//   1a
//   123456

