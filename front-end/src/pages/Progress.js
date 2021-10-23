import React, { useEffect, useState } from 'react'
import Label from '../components/Label';
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'
import 'chart.piecelabel.js';
import { Doughnut, Line } from 'react-chartjs-2';
import CircleGraph from '../components/CircleGraph';

export default function Progress() {
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

	const data = {
		labels: ['1', '2', '3', '4', '5', '6'],
		datasets: [
			{
			label: 'Emision de Carbono',
			data: bimesters.map(bimester=> bimester.co2_emitido),
			fill: true,
			backgroundColor: '#7CC72D',
			borderColor: '#188216',
			},
		],
	}
	const charOptions = {
		scales: {
			y: {
			beginAtZero: true
			}	
		},
		mantainAspectRatio: true,
	};

	const fingerprintOptions ={
		borderWidth: 3,
		label: 'CO2 emision',
		cutout: "50%",
		legend: { display: true, position: "right"},

	}
	const fingerprintData = {
		labels: ['Huella Actual'],
		datasets: [
			{
			data: [30,70],
			backgroundColor: [
				'#7CC72D',
				"#EAEAEA",
			],
			borderColor: [
				'#188216',
				"#CACACA",
			],
			...fingerprintOptions
			},
		],		
	}
	const fingerprintDataBefore = {
		labels: ['Huella anterior'],
		datasets: [
			{
			data: [80,20],
			backgroundColor: [
				'#F12C2C',
				"#EAEAEA",
			],
			borderColor: [
				'#710808',
				"#CACACA",
			],
			...fingerprintOptions
			},
		],		
	}

	return (
		<div className='p-32'>
			<Title title={"Tu historial de emisiones de CO²"} className={"text-green-dark mb-10"} />	
			<div className='px-32'>
				<Label className="text-2xl"
					label="En esta gráfica puedes ver cómo ha cambiado tu huella a través de los bimestres" />
				<div className='flex my-10'>
					<div className='m-auto w-1/2 '>
						<Line data={data} options={charOptions} width={50} height={20} />
					</div>
				</div>
				<div className='flex h-10'>
					<div className='w-1/3'>
						<Title title={"Tu huella actual es de XXX"} className=" mt-10 text-base" />	
					</div>
					<div className='w-1/4 m-auto'>
						<CircleGraph  from={"#014A00"} to={"#7CC72D" } percentage={20} id="actual"/>
					</div>
					<div className='w-1/5 m-auto'>
						<CircleGraph  from={"#710808"} to={"#F12C2C" } percentage={80} id="before"/>
					</div>
				</div>
			</div>
		</div>
	)
}
