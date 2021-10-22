import React, { useState } from 'react'
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import NavbarLandpage from '../components/NavbarLandpage';
import Title from '../components/Title'
import background from '../images/background1.png';
import calculadora from '../images/Calculadora.png';
import dino from '../images/welcomeDino.png';

export default function Landpage() {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<div style={{backgroundImage: `url(${background})`}} className='bg-cover h-screen flex'>
			<NavbarLandpage onLandpage={true} setShowLogin={setShowLogin}/>
				<div className='p-32 pb-0 w-1/2 h-full bg-white rounded-tr-xxl rounded-br-xxl flex flex-col'>
					{!showLogin?
						<div className=' '>
							<Title title="Calculadora Verde" />
							<p className='my-5 text-2xl mt-10'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							</p>
							<p className='my-5 text-2xl'>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
							<Button label="Iniciar Sesion" onClick={()=>setShowLogin(true)}/>
						</div>
						:
						<div className='px-20 flex-col space-y-5 h-auto'>
							<Title title="Iniciar Sesion" className="mb-16"/>
							<Input label="Número de Telefono" placeholder="calculadora_verde@ejemplo.com" />
							<Input label="password" placeholder="Ingresa tu contraseña" />
							<Label label="¿Olvidaste tu contraseña?" className ="text-green text-right" />
							<Button label="Iniciar Sesion" className="mt-10"/>
						</div>
					}
					<div className='m-auto mb-10'>
						<img src={dino} alt="icon" className="w-80 m-auto mt-10"/>
					</div>
				</div>
				<div className='w-1/2  h-screen flex'>
					<img src={calculadora} alt="icon" className="w-100 m-auto"/>
				</div>
		</div>
	)
}