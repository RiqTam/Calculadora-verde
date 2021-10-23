import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import happyDino from '../images/happyDino.png';

export default function Fingerprint() {
	return (
		<div className='p-32 bg-white-dark'>
			<Title title={"Mi Huella"} /><br/>
			<h1 className="text-green-dark font-black text-4xl">
				¡Muy bien! Has mejorado
			</h1><br/><br/><br/>
			<div className="flex">
				<div className="flex">
					<p className="font-semibold text-4xl">
						Tu huella actual es <br/>XXX
					</p>
					<div className="w-40 h-40 bg-green rounded-full ml-8"/>
				</div>
				<div className="flex ml-20">
					<p className="text-lg">
						Huella anterior<br/> XXX
					</p>
					<div className="w-32 h-32 bg-green rounded-full ml-8"/>
				</div>
				<div className="flex">
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
