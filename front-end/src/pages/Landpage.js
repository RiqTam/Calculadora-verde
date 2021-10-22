import React, { useState } from 'react'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import NavbarLandpage from '../components/NavbarLandpage';
import Title from '../components/Title'
import background from '../images/background1.png';
import calculadora from '../images/Calculadora.png';

export default function Landpage() {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<div style={{backgroundImage: `url(${background})`}} className='bg-cover h-screen flex'>
			<NavbarLandpage onLandpage={true}/>
			{!showLogin?
				<div className='p-32 w-1/2 h-full bg-white rounded-tr-xxl rounded-br-xxl'>
					<Title title="Calculadora Verde" />
					<p className='my-5 text-2xl mt-10'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					</p>
					<p className='my-5 text-2xl'>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<Button label="Iniciar Sesion" />
				</div>
				:''
			}
			<div className='w-1/2  h-screen flex'>
				<img src={calculadora} alt="icon" className="w-100 m-auto"/>
			</div>
		</div>
	)
}