import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import Label from '../components/Label';
import Title from '../components/Title';
import useAuth from '../hooks/useAuth';
import welcomeDino from '../images/welcomeDino.png';
import welcomeImg from '../images/welcomeImg.png';
const world = require(`../images/world100.mp4`).default;

export default function Welcome() {
    const auth = useAuth();

    return (
        <div className="bg-white-dark h-screen flex-col flex">
            <div className="flex flex-col md:flex-row h-full">
                <section className="m-auto w-full md:w-3/5 p-16 pt-40 pb-0 md:pl-20 xl:px-60  flex-col  h-full">
                    <video autoPlay loop muted  playsInline  className=" w-full h-auto rounded-2xl">
                        <source src={world} type="video/mp4"/>
                        Your Browser does not support video tag
                    </video>

                </section>
                <section className=" flex-col w-full md:w-2/5  pt-40 px-10">
                        <Title title={`Bienvenido(a), ${auth.user.name}`} className="text-green-dark mb-10" />
                        <Label label="Parece que aún no tenemos información para calcular tu huella..." 
                                className="md:text-2xl"/>
                        <Label label="¿Por qué no agregas tus datos bimestrales para calcularla?" 
                                className="md:text-2xl"/>
                        <Link to={"/Report"}>
                            <Button label="Agregar reporte" className={"mt-10"} size={"w-auto"}/>
                        </Link>
                    <img src={welcomeDino} alt="Welcome Dino" className="m-auto w-52 md:w-96"/>
                </section>
            </div>
        </div>
    )
}
