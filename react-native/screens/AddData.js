import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Checkbox, H1, Input, Span } from '../components'
import TextBase from '../components/TextBase'
import useAuth from '../hooks/useAuth'
import tw from '../tailwind'

export default function AddData({navigation}) {
    const [luz, setLuz] = useState("100")
    const [gas, setGas] = useState("200")
    const [gasolina, setGasolina] = useState("1000")
    const [agua, setAgua] = useState("1500")
	let auth = useAuth();

    async function addReport() {
        const report={
            gasto_luz: luz,
            gasto_gasolina: gasolina,
            gasto_gas: gas,
            gasto_agua: agua,
        } 
        await auth.request("bimester/newBimester", "POST", report)
		.then(res => {
			navigation.navigate('Fingerprint')
		})
        .catch((error) =>{
			console.log(error);
        });
    }

	return (
		<View style={tw`p-5`}>
			<View style={tw`w-full pb-3`}>
				<Span style={tw`text-left text-lg`}>By Dinohacks</Span>
			</View>
			<ScrollView style={tw`px-3`}>
				<H1 style={tw`text-green-dark mb-8 mt-3`}>Ayudanos a medir tu influencia en el medio ambiente...</H1>
				<Text style={tw.style(`text-black mb-5`, {fontFamily: 'MontserratBold'})}>Necesitamos un poco de información sobre los gastos de tu empresa</Text>

				<Input label="Gasto bimestral de luz" placeholder="Pesos Mexicanos" value={luz} onChangeText={setLuz} />
				<View style={tw`flex-row mt-2 mb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Input label="Gasto bimestral de gas" placeholder="Pesos Mexicanos" value={gas} onChangeText={setGas}/>
				<View style={tw`flex-row mt-2 mb-5 pb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Input label="Gasto bimestral de gasolina" placeholder="Pesos Mexicanos" value={gasolina} onChangeText={setGasolina}/>
				<View style={tw`flex-row mt-2 mb-5 pb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Input label="Gasto bimestral de agua" placeholder="Pesos Mexicanos" value={agua} onChangeText={setAgua}/>
				<View style={tw`flex-row mt-2 mb-5`}>
					<Checkbox label="Prefiero no decirlo o no aplica" />
					<TextBase style={tw`ml-5`}>Prefiero no decirlo o no aplica</TextBase>
				</View>

				<Button label="Agregar" style={tw`mb-10`} onPress={addReport} />
			</ScrollView>
		</View>
	)
}

