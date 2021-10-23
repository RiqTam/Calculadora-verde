import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import NavbarLandpage from '../components/NavbarLandpage';
import Title from '../components/Title'
import useAuth from '../hooks/useAuth';
import background from '../images/background1.png';
import calculadora from '../images/Calculadora.png';
import dino from '../images/welcomeDino.png';
import { AnimateOnChange } from 'react-animation'

export default function Landpage() {
	const [showLogin, setShowLogin] = useState(false);
	const history = useHistory();
	const location = useLocation();
	const auth = useAuth();

	const { from } = location.state || { from: { pathname: "/" } };
	const login = () => {
		auth.signin(() => {
			history.replace(from);
		});
	};

	return (
		<div style={{backgroundImage: `url(${background})`}} className='bg-cover h-screen flex'>
			<NavbarLandpage onLandpage={true} setShowLogin={setShowLogin}/>
				<div className='p-10 pb-0 w-full h-full bg-white  flex flex-col
								md:w-1/2 xl:p-16 xl:pt-32 xl:pb-0 2xl:p-32 2xl:pb-0 md:rounded-tr-xxl md:rounded-br-xxl'>
					<AnimateOnChange>
						{showLogin?
								<div className='px-5 pt-20 flex-col space-y-5 h-auto 
												xl:pt-0 xl:px-20'>
									<Title title="Iniciar Sesion" className="xl:mb-16"/>
									<Input label="Número de Telefono" placeholder="xxxxxxxxxxx" />
									<Input label="Contraseña" placeholder="Ingresa tu contraseña" />
									<Label label="¿Olvidaste tu contraseña?" className ="text-green text-right" />
									<Button label="Iniciar Sesion" className="mt-10" onClick={login}/>
								</div>
							:
								<div className='mt-20 xl:mt-0   '>
									<Title title="Calculadora Verde" />
									<p className='my-5 sm:text-lg xl:text-2xl mt-10'>
										Te damos la bienvenida a la calculadora verde de Dinohacks. 
									</p>
									<p className='my-5 sm:text-lg xl:text-2xl'>
										Aquí puedes calcular cuántas emisiones de CO2 genera tu empresa, 
										y te brindamos opciones para reducir dichas emisiones y gastos siguiendo 
										algunos consejos enlazados a las soluciones que BBVA ofrece como parte de 
										su cartera de servicios para la sustentabilidad.
									</p>
									<Button label="Iniciar Sesion" onClick={()=>setShowLogin(true)}/>
								</div>
						}
					</AnimateOnChange>
					<div className='m-auto mb-10'>
						<img src={dino} alt="icon" className="w-52 m-auto mt-10 xl:w-80"/>
					</div>
				</div>
				<div className='h-1/2 hidden
								md:w-1/2 md:h-screen md:flex '>
					<img src={calculadora} alt="icon" className="w-100 m-auto"/>
				</div>
		</div>
	)
}