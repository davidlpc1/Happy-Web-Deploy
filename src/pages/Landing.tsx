import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import styled from 'styled-components'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'

function Landing (){
    const isMobile = navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    if( isMobile ){
      return(
        <Popup
          trigger={open => (
            <div id="page-popup">
              <ButtonPopup >{open ? (
                <>
                  <span> Você está na versão Web ,porém num <strong>dispositivo Mobile</strong> </span>
                  <span> Em breve <strong>app</strong> disponível </span>
                  <Link to='/app'>
                    Ir ao mapa
                  </Link>
                </>
               ) : 'Clique aqui'}</ButtonPopup>
            </div>
          )}
          position="bottom center"
          closeOnDocumentClick
        >
          <div id="page-popup">

          </div>
        </Popup>
      )
    }
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <Link to="/">
            <img src={logoImg} alt="Happy" />
          </Link>
  
          <main>
            <h1> Leve Felicidade para o Mundo </h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          <div className="location">
            <strong>Linhares</strong>
            <span>Espírito Santo</span>
          </div>
  
          <Link to="/app" className="enter-app"> 
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </div>
      </div>
    );
}

const ButtonPopup = styled.button`
  width:285px;
  height:82px;
  background: #ffd666;
  border:none;

`

export default Landing;
