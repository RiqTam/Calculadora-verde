import React, { useEffect } from 'react'
import { useState } from 'react'
import Dropdown from '../components/Dropdown'
import SolutionBBVA from '../components/SolutionBBVA'
import Tip from '../components/Tip'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function Tips() {
	const auth = useAuth();
	const [bimester, setBimester] = useState(null);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			setBimester(res.data[res.data.length-1]);
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [auth])

	if(bimester==null) return '';
	return (
		<div className='p-32'>
			<Title title={"Consejos"} className={"mb-5"}/>
			{bimester.gasto_luz>=1000?
				<Dropdown label="Electricidad" 
					description="Aquí hay 3 posibles soluciones que pueden ayudar a tu empresa 
					a reducir sus emisiones de CO2.">
						
					<Tip text1="Tu empresa puede reducir hasta en un 99% las emisiones de CO2 
						relacionadas al consumo de energía eléctrica a través de la implementación 
						de soluciones solares como el sistema fotovoltaico."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa 
						a través del Préstamo Verde."/>

					<Tip text1="Tu empresa puede reducir las emisiones de CO2 generadas por el uso de 
						energía eléctrica a través del cambio de focos, por luces LED las cuales ayudan, no 
						sólo al ambiente, sino también reflejan un ahorro de hasta % en tu pago de 
						energía eléctrica."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa
						a través de las Cartas de crédito de importación sostenibles."/>

					<Tip text1="Tu empresa puede reducir gastos en energía eléctrica y de emisiones de CO2
						a través del uso de energías renovables, como el uso de generadores 
						eólicos y paneles solares."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa
						a través de las Cartas de crédito de importación sostenibles."/>
				</Dropdown>
			:''}
			{bimester.gasto_agua>=1000?
				<Dropdown label="Agua" 
					description="Aquí hay 3 posibles soluciones que pueden ayudar a tu empresa 
					a reducir sus emisiones de CO2.">
						
					<Tip text1="Tu empresa puede reducir el gasto de agua a través de la implementación 
						de grifos difusores y limitadores de presión, los cuales ayudan a disminuir la cantidad 
						de agua utilizada"
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa 
						a través del Préstamo vinculado a indicadores de sustentabilidad (KPI Linked LOAN)."/>

					<Tip text1="Tu empresa puede ahorrar hasta un 80% de agua y reducir costos a través del
						reemplazo de los retretes de doble descarga, grifos y mingitorios por equivalentes 
						de bajo consumo."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa 
						a través del Préstamo vinculado a indicadores de sustentabilidad (KPI Linked LOAN)."/>

					<Tip text1="Tu empresa puede ahorrar hasta un 85% en su consumo a través del desarrollo 
						de procesos, para reutilizar el agua. "
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa 
						a través del Préstamo vinculado a indicadores de sustentabilidad (KPI Linked LOAN)."/>
				</Dropdown>
			:''}
			{bimester.gasto_gasolina>=500?
				<Dropdown label="Gasolina" 
					description="Aquí hay 2 posibles soluciones que pueden ayudar a tu empresa 
					a reducir sus emisiones de CO2.">
						
					<Tip text1="Tu empresa puede disminuir su consumo de gasolina y emisión de CO2 a través 
						de la implementación de vehículos eléctricos corporativos, para el traslado de 
						colaboradores a la empresa."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa a 
						través del Préstamo verde."/>

					<Tip text1="Tu empresa puede colaborar al medio ambiente y ahorrar en el consumo de 
						gasolina a través del cambio de flotillas de vehículos de gasolina, por vehículos eléctricos."
						text2="BBVA te ayuda a financiar proyectos de sustentabilidad dentro de tu empresa a 
						través del Préstamo verde."/>
				</Dropdown>
			:''}
			<SolutionBBVA label="Cartas de crédito de importación sostenibles:" 
				solution="Permite adquirir mercancía, maquinaria y equipo verde."
				uno="Paneles solares" dos="Equipos y motores eléctricos" tres="Generadores eólicos"
				cuatro="Luces LED" link="https://www.bbva.mx/empresas/productos/comercio-internacional/importacion/carta-de-credito-de-importacion.html">
			</SolutionBBVA>

			<SolutionBBVA label="Préstamo verde:" 
				solution="Ofrece financiamiento para proyectos o activos sostenibles."
				uno="Parques eólicos" dos="Sistemas fotovoláticos" tres="Calentadores solares de agua"
				link="https://www.bbva.mx/empresas/productos/financiamiento/creditos-a-corto-y-largo-plazo/credito-refaccionario.html">
			</SolutionBBVA>

			<SolutionBBVA label="Préstamo vinculado a indicadores de sustentabilidad (KPI Linked LOAN):" 
				solution="Crédito vinculado al logro de objetivos con impacto positivo en el medio ambiente."
				uno="Reducción de plásticos" dos="Gestión energética" tres="Reducción de uso de agua y residuos"
				link="https://www.bbva.mx/empresas/productos/financiamiento/creditos-a-corto-y-largo-plazo/credito-simple.html">
			</SolutionBBVA>
		</div>
	)
}
