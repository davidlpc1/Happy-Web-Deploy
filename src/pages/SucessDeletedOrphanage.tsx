import React from 'react';
import SucessDelete from '../images/sucess-delete.svg';
import '../styles/pages/sucess-delete.css';

import ButtonMap from '../components/ButtonBackToMap'

export default function SucessDeletedOrphanage() {

    return (
        <div className="container">
            <div className="text">
                <h1>Excluído!</h1>
                <p>
                    Você excluiu o Orfanato
                </p>
                <ButtonMap backgroundColor="#D6487B" backgroundColorHover="#bf4571" />
            </div>
            <img src={SucessDelete} alt="SucessDelete"/>
        </div>
    )
}