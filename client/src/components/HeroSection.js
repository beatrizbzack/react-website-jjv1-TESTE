import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <>
      <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Realçando a sua beleza.</h1>
      <p>Alcance resultados naturais e duradouros.</p>
      {/* Botões Principais */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          tipo='agendar'
        >
          Agendar meu procedimento
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          tipo='procedimentos'
        >
          Conhecer procedimentos <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
    {/*Valores*/}
    <div className='valores-container'>
        <h1>Nosso Propósito</h1>
        <div className='valores-boxContainer'>

            <div className='valores-box'>
                <h1>Missão</h1>
                <p>Realçar a beleza autêntica de cada pessoa por meio de procedimentos anti-aging de última geração.</p>
            </div>
            <div className='valores-box'>
                <h1>Profissionais</h1>
                <p>Todos os nossos procedimentos são guiados por uma equipe altamente qualificada de profissionais em estética e bem-estar que se
                    comprometem a oferecer resultados excepcionais e personalizados para nossos clientes.  </p>
            </div>
            <div className='valores-box'>
                <h1>Serviços</h1>
                <p>
                    Com abordagens inovadoras e tecnologias avançadas, respeitamos a individualidade de cada cliente, garantindo resultados naturais e duradouros. </p>
            </div>

        </div>
    </div>
    {/*Depoimentos*/}
    <div className='depoimentos-container'>
        <h1>Quem já viveu essa experiência</h1>
        <div className='depoimentos'>
          <div className='depoimento'>
            <p>“Sempre fui muito expressiva e sorridente, o que fez com que essa área em torno do meu sorriso se ‘afundasse’. Com a ajuda da JJ Estética pude superar isso. O preenchimento foi a melhor saída pra mim, fiquei muito feliz com o resultado e com a atenção que a clínica teve comigo desde o começo. ”</p>        
            <h2> - Silvana Morares</h2>
          </div>
          <div className='depoimento'>
            <p>"Desde a recepção até os tratamentos de primeira classe, fui cativado. Profissionais altamente qualificados proporcionaram resultados além das expectativas, tudo em um ambiente seguro e luxuoso. Recomendo fortemente a JJ Estética a todos em busca de cuidados estéticos excepcionais."</p>        
            <h2> - Benylson Nascimento</h2>
          </div>
          <div className='depoimento'>
            <p>"Minha experiência na JJ Estética foi surpreendente. A equipe me transmitiu total confiança, e o procedimento foi realizado com profissionalismo exemplar. A clínica de estética de luxo é um oásis de segurança e excelência. Recomendo sem hesitação. "</p>        
            <h2> - Clara Torrer</h2>
          </div>
        </div>
    </div>
    </>
  );
}

export default HeroSection;