import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ImageSucess from '../images/sucess-create.svg'

import '../styles/pages/sucess-create.css'

export default function(){
    const history = useHistory()

    function handleNavigateToMapPage(){
        history.push('/app')
    }

    return (
        <div className="container">
            <div>
                <h1 id="information-title">Ebaaa!</h1>
                <p>
                    O cadastro deu certo e foi enviado <br />
                    ao administrador para ser aprovado. <br />
                    Agora é só esperar 
                </p>
                <button id="btn-map" onClick={handleNavigateToMapPage}> Voltar ao Mapa </button>
            </div>
            <img src={ImageSucess} alt="Tudo deu certo"/>
        </div>
    )
}