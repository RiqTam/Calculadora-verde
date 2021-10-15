import React from 'react'
import { View, Text } from 'react-native'
import Button from '../elements/Button';
import Title from '../elements/Title';
import tw from '../../tailwind';
import Input from '../elements/Input';

export default function ElementsList() {
	return (
		<View style={tw`items-center`}>
			<Title fontSize={35}>Basic Elements</Title>
			<Text style={tw`px-10 py-5`}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
			</Text>
			<Button />
			<Input />
		</View>
	)
}
