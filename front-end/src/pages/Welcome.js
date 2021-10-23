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
            <div className="flex flex-grow flex-col md:flex-row">
                <section className="m-auto w-full md:w-3/5 p-16 pt-20 pb-0 md:pl-20 xl:pl-48 flex-col">
                    <Title title={"Bienvenido(a), %user_name%"} className="text-green-dark mb-10" />
                        <Label label="Parece que aún no tenemos información para calcular tu huella..." 
                                className="md:text-2xl"/>
                        <Label label="¿Por qué no agregas tus datos bimestrales para calcularla?" 
                                className="md:text-2xl"/>
                    <Link to={"/Report"}>
                        <Button label="Agregar reporte" className={"mt-10"} size={"w-auto"}/>
                    </Link>
                </section>
                <section className="py-4 flex w-full md:w-2/5">
                    <img src={welcomeDino} alt="Welcome Dino" className="m-auto w-52 md:w-96"/>
                </section>
            </div>
            <img src={welcomeImg} alt="Welcome Img" width="100%" className="mb-0 m-auto" />
        </div>
    )
}
