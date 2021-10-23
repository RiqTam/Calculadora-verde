import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import happyDino from '../images/happyDino.png';

export default function Fingerprint() {
	return (
		<div className='p-32'>
			<Title title={"Mi Huella"} />
			<h1 className="text-green-dark font-black text-4xl">
				¡Muy bien! Has mejorado
			</h1><br/><br/>
			<div className="flex">
				<div className="flex">
					<p className="font-semibold text-4xl">
						Tu huella actual es XXX
					</p>
					<div className="w-32 h-32 bg-green rounded-full"/>
				</div>
				<div className="flex">
					<p className="text-lg">
						Huella anterior XXX
					</p>
					<div className="w-32 h-32 bg-green rounded-full"/>
				</div>
			</div>
			<div>
				<img src={happyDino} alt="happy Dino" className="m-auto mr-0" />
			</div>
			<h3 className="text-3xl">¡Felicitación 1!</h3>
			<h3 className="text-3xl">¡Felicitación 1!</h3>
			<p>
				Bien hecho, sigue así...
			</p>
			<Button label="¿Cómo seguir mejorando?"/>
		</div>
	)
}
