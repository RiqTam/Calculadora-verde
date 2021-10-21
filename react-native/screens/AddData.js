import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Checkbox, H1, Input, Span } from '../components'
import TextBase from '../components/TextBase'
import tw from '../tailwind'

export default function AddData() {
	return (
		<View style={tw`p-5`}>
			<View style={tw`w-full pb-3`}>
				<Span style={tw`text-left text-lg`}>By Dinohacks</Span>
			</View>
			<ScrollView style={tw`px-3`}>
				<H1 style={tw`text-green-medium mb-8 mt-3`}>Ayudanos a medir tu influencia en el medio ambiente...</H1>
				<Text style={tw.style(`text-black mb-5`, {fontFamily: 'MontserratBold'})}>Necesitamos un poco de información sobre los gastos de tu empresa</Text>

				<Input label="Gasto bimestral de luz" placeholder="Pesos Mexicanos"/>
				<View style={tw`flex-row mt-2 mb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Input label="Gasto bimestral de agua" placeholder="Pesos Mexicanos" />
				<View style={tw`flex-row mt-2 mb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Input label="Gasto bimestral de gas" placeholder="Pesos Mexicanos" />
				<View style={tw`flex-row mt-2 mb-5 pb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>
			</ScrollView>
		</View>
	)
}

