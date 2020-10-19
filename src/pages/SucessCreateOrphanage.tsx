import React from 'react';
import ImageSucess from '../images/sucess-create.svg'

import ButtonMap from '../components/ButtonBackToMap'

import '../styles/pages/sucess-create.css'

export default function(){

    return (
        <div className="container-sucess">
            <div>
                <h1 id="information-title">Ebaaa!</h1>
                <p>
                    O cadastro deu certo e foi enviado <br />
                    ao administrador para ser aprovado. <br />
                    Agora é só esperar 
                </p>
                <ButtonMap backgroundColor="#31B272" backgroundColorHover=" #3BD689" />
            </div>
            <img src={ImageSucess} alt="Tudo deu certo"/>
        </div>
    )
}