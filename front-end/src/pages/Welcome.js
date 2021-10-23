import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import Label from '../components/Label';
import Title from '../components/Title';
import welcomeDino from '../images/welcomeDino.png';
import welcomeImg from '../images/welcomeImg.png';

export default function Welcome() {
    return (
        <div className="bg-white-dark h-screen flex-col flex ">
            <div className="flex flex-grow">
                <section className="m-auto w-3/5 pl-48 flex-col">
                    <Title title={"Bienvenido(a), %user_name%"} className="text-green-dark mb-10" />
                        <Label label="Parece que aún no tenemos información para calcular tu huella..." 
                                className="text-2xl"/>
                        <Label label="¿Por qué no agregas tus datos bimestrales para calcularla?" 
                                className="text-2xl"/>
                    <Link to={"/Report"}>
                        <Button label="Agregar reporte" className={"mt-10"} size={"w-auto"}/>
                    </Link>
                </section>
                <section className="py-4 flex w-2/5">
                    <img src={welcomeDino} alt="Welcome Dino" className="m-auto"/>
                </section>
            </div>
            <img src={welcomeImg} alt="Welcome Img" width="100%" className="mb-0 m-auto" />
        </div>
    )
}
