import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/paginas/Home'; 
import Procedimentos from './components/paginas/Procedimentos';
import Login from './components/paginas/Login';
import Profissionais from './components/paginas/Profissionais';
import Cadastro from './components/paginas/Cadastro';
import LoginClinica from './components/paginas/Clinica';
import LoginPaciente from './components/paginas/Paciente';
import CadClinica from './components/paginas/CadClinica';
import CadPaciente from './components/paginas/CadPaciente';
import InicioPaciente from './components/paginas/portal-clinicas/InicioPaciente';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Procedimentos' element={<Procedimentos/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profissionais' element={<Profissionais/>}/>
        <Route path='/LoginPaciente' element={<LoginPaciente/>}/>
        <Route path='/LoginClinica' element={<LoginClinica/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/CadClinica' element={<CadClinica/>}/>
        <Route path='/CadPaciente' element={<CadPaciente/>}/>
        <Route path='/InicioPaciente' element={<InicioPaciente/>}/>
      </Routes>
    </Router>
    </>

      
  );
}

export default App;
