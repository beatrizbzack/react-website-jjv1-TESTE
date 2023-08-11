import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'; 
import { Button } from './Button';


function NavBar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true); 

    const handleClick = () => setClick(!click) // fica variando de t/f dependendo do click 
    const closeMobileMenu = () => setClick(false); 
    
    const showButton = () => {

        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }; // define se vai aparecer o botão de menu lateral ou não de acordo com o tamanho da tela

    // melhorando a renderização dos efeitos 
    useEffect(( ) => {
        showButton()
    },[] ) 

    window.addEventListener('resize', showButton); 

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}> 
                    JJ Estética   {/*<i className="fa-solid fa-spa"></i>*/}
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                <i className={ click ? "fa-solid fa-bars fa-rotate-90" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'> 
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu} >
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/procedimentos' className='nav-links' onClick={closeMobileMenu} >
                            Procedimentos JJ
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/Profissionais' className='nav-links' onClick={closeMobileMenu} >
                            Profissionais
                        </Link>
                    </li>
                </ul>
                {button && <Button tipo='agendar' buttonStyle='btn--outline'>Login</Button>}
            </div>
        </nav>
    </>
  )
}

export default NavBar