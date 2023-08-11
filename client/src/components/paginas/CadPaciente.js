import React, { useState } from 'react' // uso do hook para armazenar os valores de login
import Footer from '../Footer'
import './stylespg/Paciente.css'
import Axios from "axios" 
import { date } from 'yup';


function CadPaciente() {

  // SETTERS dos valores das variaveis em vazio antes de preencherem 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [nome, setNome] = useState(""); 
  const [genero, setGenero] = useState(""); 
  const [cpf, setCpf] = useState(""); 
  const [dateN, setdateN] = useState(""); 
  const [celular, setCelular] = useState(""); 
  const [conf, setPasswordConf] = useState(""); 


  const handleSubmit = (e) =>{
      e.preventDefault(); // parre de fazer a ação padrão - vai enviar os dados 
      console.log('submit', {email, password}); 

      Axios.post("http://localhost:3001/CadastroPaciente", {
      email:email,
      password:password,
      nome: nome, 
      genero: genero, 
      cpf:cpf, 
      dateN:dateN, 
      celular:celular, 
      }).then((response) => {
      alert(response.data.msg);
      });

  }; 

  return (
    <>
    <div id='cadastro-paciente' className='login-paciente'>
      <h1 className='title'>Cadastro Paciente</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className='field'> {/* nome */}
          <label htmlFor='newValue'>Nome Completo:</label>
          <input 
          type='text' 
          name='nome' 
          id='nome' 
          value={nome} // seta o valor do campo com o que tem em state 
          onChange={(e) => setNome(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/* gênero */}
          <label htmlFor='newValue'>Gênero</label>
          <input 
          type='text' 
          name='genero' 
          id='genero' 
          value={genero} // seta o valor do campo com o que tem em state 
          onChange={(e) => setGenero(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/* cpf */}
          <label htmlFor='newValue'>Cpf:</label>
          <input 
          placeholder='  ex: 562.898.330-7x'
          type='number' 
          name='cpf' 
          id='cpf' 
          value={cpf} // seta o valor do campo com o que tem em state 
          onChange={(e) => setCpf(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/* data de nascimento */}
          <label htmlFor='newValue'>Data de Nascimento</label>
          <input 
          type='date' 
          name='dateN' 
          id='dateN' 
          value={dateN} // seta o valor do campo com o que tem em state 
          onChange={(e) => setdateN(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/* telefone cel */}
          <label htmlFor='newValue'>Telefone Celular:</label>
          <input 
          type='tel' 
          name='celular' 
          id='celular' 
          placeholder='  ex: 11-900000000'
          pattern="[0-9]{2}-9[0-9]{8}"
          value={celular} // seta o valor do campo com o que tem em state 
          onChange={(e) => setCelular(e.target.value)} // atualiza com o valor inputado
          /> 
        </div>
        <div className='field'> {/* email */}
          <label htmlFor='email'>Email:</label>
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
          placeholder='  pelo menos 6 caracteres'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='field'> {/*confirmar senha*/}
          <label htmlFor='password'>Confirmar Senha:</label>
          <input 
          type='password' 
          name='password' 
          id='password'
          value={conf}
          onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>
        <div className='actions'> {/* cadastrar - botão */}
          <button type='submit'>Registrar</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default CadPaciente