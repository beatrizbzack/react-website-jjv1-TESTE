import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Se Inscreva na nossa newsletter para receber notícias sobre o mundo da estética e as melhores promoções
        </p>
        <p className='footer-subscription-text'>
          Você pode cancelar a sua inscrição a qualquer momento
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
            <Button buttonStyle='btn--outline' tipo = 'nada'>Inscrever</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Horários</h2>
            <h3>Seg à Sex - 9h às 20h</h3>
            <h3>Sab - 10h às 16h</h3>
          </div>
          <div className='footer-link-items'>
            <h2>Endereço</h2>
            <h3>Jardim Aquarius - São José dos Campos</h3>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <h3>Celular: +55(49)99999-9999 </h3>
            <h3>Email: atendimento@jjestetica.com</h3>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <h3>@clinicajjestetica em todas as redes</h3>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Linkedin</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>JJ ESTÉTICA © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;