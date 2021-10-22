import React from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind'

export default function Span(props) {
	return (
		<View>
			<Text style={tw.style(`text-green-medium text-base`,{ fontFamily: 'MontserratBold', ...props.style })}>
				{props.children}
			</Text>
		</View>
	)
}
