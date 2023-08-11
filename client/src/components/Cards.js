import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button'; 

function Cards() {
  return (
    <div className='cards'>
      <h1>Conheça Alguns de Nossos Procedimentos</h1>
      <div className='cards__container'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          tipo='agendar'
        >
          Agendar meu procedimento
        </Button>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/skinbooster.jpg'
              text='SkinBooster: hidratação profunda que promove a melhora muscular, diminuindo pequenos sinais e melhorando o aspecto geral da pele'
              label='Injetável - Rosto'
              path='/login'
            />
            <CardItem
              src='images/ultraformer.jpg'
              text='Ultraformer: equipamento de ultrassom macro e microfocado que estímula colágeno, queima de gorgura e efeito lifting na pele'
              label='Ultrassom - Rosto e Corpo'
              path='/login'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hollywoodPeel.png'
              text='Holywood Peel: ótimo para processo de rejuvenescimento ele reduz os poros, as linhas de expressão, manchas e aumenta a produção de colágeno da pele'
              label='Laser Q+ - Rosto'
              path='/login'
            />
            <CardItem
              src='images/radioFreq.jpg'
              text='Radiofrequência: terapia que foca em tratar áreas com flacidez, rugas, celulite e estrias'
              label='Radiofrequência - Rosto e Corpo'
              path='/login'
            />
            <CardItem
              src='images/sculptra.jpg'
              text='Sculptra Galderma: bioestimulador capaz de reduzir marcas de expressão e melhorar a firmeza da pele e os seus contorno'
              label='Injetável - Rosto e Corpo'
              path='/login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;