import Footer from '../Footer'
import './stylespg/Clinica.css'
import Axios from "axios" 
import React, { useState } from 'react' // uso do hook para armazenar os valores de login



function CadClinica() {

  // SETTERS dos valores das variaveis em vazio antes de preencherem 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");  
  const [celular, setCelular] = useState(""); 
  const [telefone, setTelefone] = useState("");
  const [idClinica, setIdClinica] = useState("");
  const [nome, setNome] = useState("");
  const [conf, setPasswordConf] = useState("");
   

  const handleSubmit = (e) =>{
      e.preventDefault(); // parre de fazer a ação padrão - vai enviar os dados 
      console.log('submit', {email, password}); 

      Axios.post("http://localhost:3001/CadastroClinica", {
      email:email,
      password:password, 
      nome:nome, 
      telefone:telefone, 
      celular:celular, 
      idClinica:idClinica,
      }).then((response) => {
      alert(response.data.msg);
      });

  }; 

return (
  <>
  <div id='cadastro-clinica' className='login-clinica'>
    <h1 className='title'>Cadastro Clinica</h1>
    <form className='form' onSubmit={handleSubmit}>
    <div className='field'> {/* nome */}
        <label htmlFor='newValue'>Nome Unidade:</label>
        <input 
        type='text' 
        name='nome' 
        id='nome' 
        value={nome} // seta o valor do campo com o que tem em state 
        onChange={(e) => setNome(e.target.value)} // atualiza com o valor inputado
        /> 
      </div>
      <div className='field'> {/* email */}
        <label htmlFor='email'>Email:</label>
        <input 
        type='email' 
        name='email' 
        id='email' 
        pattern="[a-z0-9._%+\-]+@jjestetica.com"
        placeholder='  ex: unidadeX@jjestetica.com'
        value={email} // seta o valor do campo com o que tem em state 
        onChange={(e) => setEmail(e.target.value)} // atualiza com o valor inputado
        /> 
      </div>
      <div className='field'> {/* telefone */}
        <label htmlFor='newValue'>Telefone:</label>
        <input 
        type='tel' 
        name='telefone' 
        id='telefone' 
        placeholder='  ex: 49-1111-2222'
        pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
        value={telefone} // seta o valor do campo com o que tem em state 
        onChange={(e) => setTelefone(e.target.value)} // atualiza com o valor inputado
        /> 
      </div>
      <div className='field'> {/* cel */}
        <label htmlFor='newValue'>Celular:</label>
        <input 
        type='tel' 
        name='celular' 
        id='celular' 
        placeholder='  ex: 49-90000-0000'
        pattern="[0-9]{2}-9[0-9]{4}-[0-9]{4}"
        value={celular} // seta o valor do campo com o que tem em state 
        onChange={(e) => setCelular(e.target.value)} // atualiza com o valor inputado
        /> 
      </div>
      <div className='field'> {/* id clinica */}
        <label htmlFor='newValue'>Id Clinica:</label>
        <input 
        type='tel' 
        name='id' 
        id='id' 
        value={idClinica} // seta o valor do campo com o que tem em state 
        onChange={(e) => setIdClinica(e.target.value)} // atualiza com o valor inputado
        /> 
      </div>
      <div className='field'> {/*senha*/}
        <label htmlFor='password'>Senha (6 caracteres ou mais):</label>
        <input 
        type='password' 
        name='password' 
        id='password'
        pattern='.{6,}'
        title='a senha deve conter pelo menos 6 caracteres'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='field'> {/*confirmar senha*/}
        <label htmlFor='password'>Confirmar Senha:</label>
        <input 
        type='password' 
        name='passwordConf' 
        id='passwordConf'
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

export default CadClinica