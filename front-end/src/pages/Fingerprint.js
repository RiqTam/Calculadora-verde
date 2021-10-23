import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from '../components/Button'
import CircleGraph from '../components/CircleGraph';
import Title from '../components/Title'
import useAuth from '../hooks/useAuth';
import happyDino from '../images/happyDino.png';

export default function Fingerprint() {
	const auth = useAuth();
	const [bimesters, setBimesters] = useState([]);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			console.log(res.data);
			setBimesters(res.data);
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [auth])

	if(bimesters.length<1) return '';
	return (
		<div className='p-32 bg-white-dark'>
			<Title title={"Mi Huella"} /><br/>
			<h1 className="text-green-dark font-black text-4xl">
				¡Muy bien! Has mejorado
			</h1><br/><br/><br/>
			<div className="flex">
				<div className='flex w-2/3 '>
					<div className="flex-col ">
						<p className="font-semibold text-4xl">
							Tu huella actual es <br/>{bimesters[bimesters.length-1].co2_emitido}
						</p>
						<div className="m-auto px-20 pt-0 flex">
							<CircleGraph  from={"#014A00"} to={"#7CC72D" } percentage={20} id="actual"/>
						</div>
					</div>
					<div className="flex-col ">
						<p className="text-lg">
							Huella anterior<br/> {bimesters[bimesters.length-2].co2_emitido}
						</p>
						<div className=" m-auto px-32 pt-0 flex">
							<CircleGraph  from={"#710808"} to={"#F12C2C" } percentage={80} id="before"/>
						</div>
					</div>
				</div>
				<div className="flex m-auto">
					<img src={happyDino} alt="happy Dino" className="m-auto" />
				</div>
			</div>
			<h3 className="text-3xl py-1">¡Felicitación 1!</h3>
			<h3 className="text-3xl py-1">¡Felicitación 1!</h3>
			<p className="py-3">
				Bien hecho, sigue así...
			</p>
			<Button label="¿Cómo seguir mejorando?" size="w-auto"/>
		</div>
	)
}
