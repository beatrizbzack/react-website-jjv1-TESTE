import React, { useState } from 'react' // uso do hook para armazenar os valores de login
import Footer from '../Footer'
import './stylespg/Paciente.css'
import Axios from "axios"
import { Link } from 'react-router-dom'  
import * as yup from "yup"; 



function LoginPaciente() {

  // SETTERS dos valores das variaveis em vazio antes de preencherem 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  
  const handleLogin = (e) =>{
    e.preventDefault(); // parre de fazer a ação padrão - vai enviar os dados 
    console.log('submit', {email, password}); 

    Axios.post("http://localhost:3001/LoginPaciente", {
      email: email,
      password:password,
    }).then((response) => {
      alert(response.data.msg);
    });

  }; 

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
  })

  return (
    <>
    <div id='login' className='login-paciente'>
      <h1 className='title'>Login Paciente</h1>
      <form className='form' onSubmit={handleLogin} validationSchema={validationsLogin}>
        <div className='field'> {/* email */}
          <label htmlFor='email'>Email Paciente:</label>
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
          Esqueci minha senha
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

export default LoginPaciente