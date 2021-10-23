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
				<div className='p-32 pb-0 w-1/2 h-full bg-white rounded-tr-xxl rounded-br-xxl flex flex-col'>
					<AnimateOnChange>
						{showLogin?
							<div className='px-20 flex-col space-y-5 h-auto '>
								<Title title="Iniciar Sesion" className="mb-16"/>
								<Input label="Número de Telefono" placeholder="calculadora_verde@ejemplo.com" />
								<Input label="password" placeholder="Ingresa tu contraseña" />
								<Label label="¿Olvidaste tu contraseña?" className ="text-green text-right" />
								<Button label="Iniciar Sesion" className="mt-10" onClick={login}/>
							</div>
							:
								<div className='  '>
									<Title title="Calculadora Verde" />
									<p className='my-5 text-2xl mt-10'>
										Te damos la bienvenida a la calculadora verde de Dinohacks. 
									</p>
									<p className='my-5 text-2xl'>
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
						<img src={dino} alt="icon" className="w-80 m-auto mt-10"/>
					</div>
				</div>
				<div className='w-1/2  h-screen flex'>
					<img src={calculadora} alt="icon" className="w-100 m-auto"/>
				</div>
		</div>
	)
}