import React from 'react'
import './button.css';
import {Link} from 'react-router-dom'; 

const STYLES = ['btn--primary', 'btn--outline','btn--paciente','btn--clinica', 'btn--cadastro'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize,tipo}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (tipo === 'agendar'){
        return (
            <Link to='/Login'  className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick} type={type}>
                {children} 
            </button>
            </Link>
        )
    }else if (tipo === 'paciente'){
        return (
            <Link to='/LoginPaciente'  className='btn-mobile'>
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
               onClick={onClick} type={type}>
                {children} 
               </button>
            </Link>
            )
    } else if (tipo === 'clinica'){
        return (
            <Link to='/LoginClinica'  className='btn-mobile'>
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
               onClick={onClick} type={type}>
                {children} 
               </button>
            </Link>
            )
    } else if (tipo === 'cadastro'){
        return (
            <Link to='/Cadastro'  className='btn-mobile'>
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
               onClick={onClick} type={type}>
                {children} 
               </button>
            </Link>
            )
    } 
    else if (tipo === 'pacienteCad'){
        return (
            <Link to='/CadPaciente'  className='btn-mobile'>
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
               onClick={onClick} type={type}>
                {children} 
               </button>
            </Link>
            )
    }else if (tipo === 'clinicaCad'){
        return (
            <Link to='/CadClinica'  className='btn-mobile'>
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
               onClick={onClick} type={type}>
                {children} 
               </button>
            </Link>
            )
    } else if (tipo === 'nada'){ // newsletter - se der tempo: fazer guardar na base de dados 
        return (

            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick} type={type}>
            {children} 
            </button>

            )
    }else {
        return (
        <Link to='/Procedimentos'  className='btn-mobile'>
           <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
           onClick={onClick} type={type}>
            {children} 
           </button>
        </Link>
        )
    }
}; 