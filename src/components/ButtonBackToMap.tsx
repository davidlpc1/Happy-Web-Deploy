import React from 'react';

interface ButtonProps{
    backgroundColor: string;
    backgroundColorHover: string;
}

export default function ButtonBackToMap(props: ButtonProps){
    return (
        <div>
            <h1>{props}</h1>
        </div>
    )
}