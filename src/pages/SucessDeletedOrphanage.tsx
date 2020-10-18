import React from 'react';
import { Link } from 'react-router-dom';
import SucessDelete from '../images/sucess-delete.svg';
import '../styles/pages/sucess-delete.css';

export default function SucessDeletedOrphanage() {

    return (
        <div className="container">
            <div className="text">
                <h1>Excluído!</h1>
                <p>
                    Você excluiu o Orfanato
                </p>
                <Link to="/">
                    <button>Voltar ao mapa</button>
                </Link>
            </div>
            <img src={SucessDelete}/>
        </div>
    )
}