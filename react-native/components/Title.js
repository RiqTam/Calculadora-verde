import React from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind';

export default function Title(props) {

	return (
		<View>
			<Text style={tw.style(`text-black`,{ fontFamily: 'MontserratBlack', fontSize: props.fontSize || 40 })}>{props.children}</Text>
		</View>
	);
}
