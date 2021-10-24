import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import Dialog from '../components/Dialog';
import Title from '../components/Title';
import useAuth from '../hooks/useAuth';
import welcomeDino from '../images/welcomeDino.png';
const world = require(`../images/world30.mp4`).default;
const world50 = require(`../images/world50.mp4`).default;
const world100 = require(`../images/world100.mp4`).default;

function calculatePercentage(val) {
	const perc = val/300;
	return perc>1?100:parseFloat(perc*100).toFixed(2);
}

export default function Welcome() {
    const auth = useAuth();
	const [bimesters, setBimesters] = useState([]);
	const [current, setCurrent] = useState(null);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			setBimesters(res.data);
			setCurrent(calculatePercentage(res.data[res.data.length-1].co2_emitido));
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [auth])

    function selectWorld() {
        if(current==null)return ''
        if (current>=50) {
            return <source src={world100} type="video/mp4"/>
        }
        if(current>=30) {
            return <source src={world50} type="video/mp4"/>
        }
        if(current>=0)
            return <source src={world} type="video/mp4"/>
    }
    return (
        <div className="bg-white-dark h-screen flex-col flex">
            <div className="flex flex-col md:flex-row h-full">
                <section className="m-auto w-full md:w-3/5 p-16 pt-40 pb-0 md:pl-20 xl:px-60  flex-col  h-full">
                    <video autoPlay loop muted  playsInline  className=" w-full h-auto rounded-2xl">
                        {selectWorld()}
                        Your Browser does not support video tag
                    </video>

                </section>
                <section className=" flex-col w-full md:w-2/5  pt-32 pr-20">
                    <Title title={`¡Hola ${auth.user.name}, mi nombre es Dino!`} className="text-green-dark mb-10" />
                    <Dialog dialog="Te ayudaré a reducir tus emisiones de CO2" />
                    <Dialog dialog="El planeta que ves a la izquierda cambiará de acuerdo con tus emisiones de CO2" />
                    {bimesters.length<1?
                        <>
                            <Dialog dialog="Parece que aún no tenemos información para calcular tu huella..." className="mt-5"/>
                            <Dialog dialog="¿Por qué no agregas tus datos bimestrales para calcularla?" className="mt-5" />                   
                        </>
                    :''}

                    <div className='flex '>
                        <img src={welcomeDino} alt="Welcome Dino" className="m-auto w-52 md:w-96"/>
                        <Link to={"/Report"}>
                                <Button label="Agregar reporte" classNameParent={" mr-0 m-auto mt-10"} size={"w-auto"}/>
                        </Link>
                    </div>

                </section>
            </div>
        </div>
    )
}
