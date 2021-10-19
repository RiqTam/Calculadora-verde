import React from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind'

export default function H1(props) {
	return (
		<View>
			<Text style={tw.style(`text-black`,{ fontFamily: 'MontserratBlack', fontSize: 25 , ...props.style})}>
				{props.children}
			</Text>
		</View>
	)
}
