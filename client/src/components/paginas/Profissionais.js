import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './stylespg/Profissionais.css'
import CardItem from '../CardItem';
import { Button } from '../Button'; 
import '../Cards.css';

function Profissionais() {
  return (
    <>
    <div className='hero-container1'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Realçando a sua beleza.</h1>
      <p>Na JJ Estética o cuidado com cliente é a primeira prioridade. Os procedimentos são realizados com profissionais que prezam pela excelência.</p>
    </div>
    <div className='hero-container2'>
      <h1>Conheça Algumas das Integrantes da Nossa Equipe</h1>
    </div>
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/prof2.jpeg'
              text='Experiência: formada em biomedicina
              Procedimentos: Botox e fios de PDO'
              label='Agendar com: Maria dos Santos'
              path='/login'
            />
            <CardItem
              src='images/prof3.jpeg'
              text='Experiência: curso técnico de esteticismo
              Procedimentos: Rejuvenescimento, Ultraformer, Hollywood Peel e Radiofrequência'
              label='Agendar com: Rosana Fátima Souza'
              path='/login'
            />
          </ul>
        </div>
      </div>

    <Footer/> 
    </>
  );
}

export default Profissionais; 