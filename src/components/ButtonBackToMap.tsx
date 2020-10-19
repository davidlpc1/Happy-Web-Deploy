import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface ButtonProps{
    backgroundColor: string;
    backgroundColorHover: string;
}

export default function ButtonBackToMap(props: ButtonProps){
    
    const ButtonMap = styled.button`
        margin-top: 60px;

        border-radius:20px;
        border:none;

        width: 243px;
        height:64px;

        color: #fff;
        font-weight: 800;
        font-size: 18px;

        cursor: pointer;

        transition: 400ms;
        background-color: ${props.backgroundColor};
        &:hover{
            background-color: ${props.backgroundColorHover};
            transform:translateY(-.3rem);
        }
    `;

    return (
        <>
            <Link to='/app'>
                <ButtonMap>Voltar ao mapa</ButtonMap>
            </Link>
        </>
    )
}
