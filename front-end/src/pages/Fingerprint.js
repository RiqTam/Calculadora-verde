import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button'
import CircleGraph from '../components/CircleGraph';
import Title from '../components/Title'
import useAuth from '../hooks/useAuth';
import happyDino from '../images/happyDino.png';

function calculatePercentage(val) {
	const perc = val/300;
	return perc>1?100:parseFloat(perc*100).toFixed(2);
}


export default function Fingerprint() {
    const history = useHistory();
	const auth = useAuth();
	const [bimesters, setBimesters] = useState([]);
	const [current, setCurrent] = useState(null);
	const [last, setLast] = useState(null);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			setBimesters(res.data);
			setCurrent(parseFloat(res.data[res.data.length-1].co2_emitido).toFixed(2));
			setLast(parseFloat(res.data[res.data.length-2].co2_emitido).toFixed(2));
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [auth])

	function redirect() {
		history.push("/Tips");
	}

	function renderCircleGraph(percentage, id) {
		if (percentage>66) {
			return <CircleGraph percentage={percentage} from={"#710808"} to={"#F12C2C"} id={id}/>
		} else if(percentage>33) {
			return <CircleGraph percentage={percentage} from={'#9D9700'} to={'#F5F867'} id={id}/>
		}else{
			return <CircleGraph percentage={percentage} from={"#014A00"} to={"#7CC72D"} id={id}/>
		}	
	}

	if(bimesters.length<1 ) return '';
	const percentageCurrent = calculatePercentage(current);
	const percentageLast = calculatePercentage(last);

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
							Tu huella actual es <br/>{current}Kg CO₂ - {percentageCurrent}%
						</p>
						<div className="m-auto px-20 pt-0 flex">
							{renderCircleGraph(percentageCurrent, "actual")}
						</div>
					</div>
					<div className="flex-col ">
						<p className="text-lg">
							Huella anterior<br/>{last}Kg CO₂ - {percentageLast}%
						</p>
						<div className=" m-auto px-32 pt-0 flex">
							{renderCircleGraph(percentageLast, "before")}
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
			<Button label="¿Cómo seguir mejorando?" size="w-auto" onClick={redirect}/>
		</div>
	)
}
