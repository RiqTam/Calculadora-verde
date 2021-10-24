import React from 'react';
import welcomeDino from '../images/welcomeDino.png';

export default function Load() {
    return (
        <div className="h-screen bg-white-dark flex-col w-full">
            <img src={welcomeDino} alt="Welcome Img" className="m-auto" width="25%"/>
            <h1 className="text-green-dark text-4xl font-bold m-auto w-full text-center">Cargando...</h1>
        </div>
    )
}
