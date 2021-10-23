import React, { useEffect, useState } from 'react'
import Label from '../components/Label';
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'
import 'chart.piecelabel.js';
import {  Line } from 'react-chartjs-2';
import CircleGraph from '../components/CircleGraph';

function calculatePercentage(val) {
	const perc = val/300;
	return perc>1?100:parseFloat(perc*100).toFixed(2);
}
export default function Progress() {
	const auth = useAuth();
	const [bimesters, setBimesters] = useState([]);
	const [current, setCurrent] = useState(null);
	const [last, setLast] = useState(null);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			console.log(res.data);
			setBimesters(res.data);
			setCurrent(parseFloat(res.data[res.data.length-1].co2_emitido).toFixed(2));
			setLast(parseFloat(res.data[res.data.length-2].co2_emitido).toFixed(2));
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [auth])

	const data = {
		labels: bimesters.map(bimester=> bimester.created_at.substring(0,10)),
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
	
	if(bimesters.length<1) return ''
	const percentageCurrent = calculatePercentage(current);
	const percentageLast = calculatePercentage(last);
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
						<Title title={`Tu huella actual es de ${current}Kg CO₂ - ${percentageCurrent}`} className=" mt-10 text-base" />	
					</div>
					<div className='w-1/4 m-auto'>
						<CircleGraph  from={"#014A00"} to={"#7CC72D" } percentage={percentageCurrent} id="actual"/>
					</div>
					<div className='w-1/5 m-auto'>
						<CircleGraph  from={"#710808"} to={"#F12C2C" } percentage={percentageLast} id="before"/>
					</div>
				</div>
			</div>
		</div>
	)
}
