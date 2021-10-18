import React from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind';
import { Button, Checkbox, H1, Input, Title  } from '../components';

export default function ElementsList() {
	return (
		<View style={tw`items-center`}>
			<Title fontSize={35}>Basic Elements</Title>
			<H1 >Header 1</H1>
			<Text style={tw`px-10 py-3`}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
			</Text>
			<Button onPress={()=>console.log("hi")} style={tw`m-3`}/>
			<View style={tw`m-3`}>
				<Input label="Email" placeholder="Ingresa tu Email"/>
			</View>
			<Checkbox />
		</View>
	)
}
