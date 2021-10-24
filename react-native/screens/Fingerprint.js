import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button, H1, Span } from '../components'
import CircleGraph from '../components/CircleGraph'
import TextBase from '../components/TextBase'
import tw from '../tailwind'
import sadDino from "../assets/images/sadDino.png";

export default function Fingerprint() {
	return (
		<View style={tw`p-5`}>
			<View style={tw`w-full pb-3`}>
				<Span style={tw`text-left text-lg`}>By Dinohacks</Span>
			</View>
			<H1 style={tw`text-green-dark mb-3 mt-3`}>¡Muy bien! Has mejorado</H1>
			<Text style={tw.style(`text-black`, {fontFamily: 'MontserratBold'})}>Tu huella actual es de XXX</Text>
			<View style={tw`flex-row mb-5`}>
				<View style={tw`w-1/2 h-60 `}>
					<View style={tw`h-3/5 justify-center items-center p-3`}>
						<CircleGraph percentage={90} from={tw.color('green-medium')} to={tw.color('green-light')}/>
					</View>
					<View style={tw`h-2/5 justify-center items-center mt-3`}>
						<CircleGraph percentage={75} from={tw.color('red-dark')} to={tw.color('red')}/>
						<TextBase>Huella anterior</TextBase>
					</View>
				</View>
				<View style={tw`w-1/2 h-60  items-center justify-center`}>
					<Image style={tw`w-full h-40`} source={sadDino} />
				</View>
			</View>
			<TextBase>¡Reduciste tu gasto de luz un 50%, de XXX a XX!</TextBase>
			<TextBase>¡Reduciste tu gasto de agua un 30%, de XXX a XX!</TextBase>
			<TextBase>Bien hecho, sigue así</TextBase>
			<Button label="¿Cómo seguir mejorando?" style={tw`my-3`}/>
		</View>
	)
}