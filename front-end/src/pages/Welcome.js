import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import welcomeDino from '../images/welcomeDino.png';
import welcomeImg from '../images/welcomeImg.png';

export default function Welcome() {
    return (
        <div className="bg-white-dark h-screen">
            <Navbar/>
            <div className="flex">
                <section className="m-auto">
                    <h1 className="text-green-dark font-black text-4xl">
                        Bienvenido(a), %user_name%
                    </h1>
                    <p>
                        Parece que aún no tenemos información para calcular tu huella...
                    </p>
                    <p>
                        ¿Por qué no agregas tus datos bimestrales para calcularla?
                    </p>
                    <Button label="Agregar reporte"/>
                </section>
                <section className="py-4">
                    <img src={welcomeDino} alt="Welcome Dino"/>
                </section>
            </div>
            <div className="w-full">
                <img src={welcomeImg} alt="Welcome Img"/>
            </div>
        </div>
    )
}
