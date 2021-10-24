import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Button, H1, Span } from '../components'
import CircleGraph from '../components/CircleGraph'
import TextBase from '../components/TextBase'
import tw from '../tailwind'
import sadDino from "../assets/images/sadDino.png";
import useAuth from '../hooks/useAuth';

function calculatePercentage(val) {
	const perc = val/500;
	return perc>1?100:parseFloat(perc*100).toFixed(2);
}

export default function Fingerprint() {
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

	if(auth.user==null) return '';
	const percentageCurrent = calculatePercentage(current);
	const percentageLast = calculatePercentage(last);
	return (
		<View style={tw`p-5`}>
			<View style={tw`w-full pb-3`}>
				<Span style={tw`text-left text-lg`}>By Dinohacks</Span>
			</View>
			<H1 style={tw`text-green-dark mb-3 mt-3`}>¡Muy bien! Has mejorado {auth.user.name}</H1>
			<Text style={tw.style(`text-black`, {fontFamily: 'MontserratBold'})}>Tu huella actual es de {current}Kg CO₂ - {percentageCurrent}%</Text>
			<View style={tw`flex-row mb-5`}>
				<View style={tw`w-1/2 h-60 `}>
					<View style={tw`h-3/5 justify-center items-center p-3`}>
						<CircleGraph percentage={percentageCurrent} from={tw.color('green-medium')} to={tw.color('green-light')}/>
					</View>
					<View style={tw`h-2/5 justify-center items-center mt-3`}>
						<CircleGraph percentage={percentageLast} from={tw.color('red-dark')} to={tw.color('red')}/>
						<TextBase>Huella anterior</TextBase>
					</View>
				</View>
				<View style={tw`w-1/2 h-60  items-center justify-center`}>
					<Image style={tw`w-full h-40`} source={sadDino} />
				</View>
			</View>
			<TextBase>¡Reduciste tu gasto de luz un 50%, de XXX a XX!</TextBase>
			<TextBase>¡Reduciste tu gasto de agua un 30%, de XXX a XX!</TextBase>
			<H1>Bien hecho, sigue así</H1>
		</View>
	)
}
