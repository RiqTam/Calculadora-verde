import React from 'react';
import { View } from 'react-native';
import Title from '../components/Title';
import tw from '../tailwind';

export default function Landpage() {
	return (
		<View style={tw`p-0`}>
			<Title>Calculadora Verde</Title>
		</View>
	)
}
