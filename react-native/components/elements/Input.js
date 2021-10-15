import React from 'react'
import { View, TextInput } from 'react-native'
import tw from '../../tailwind'

export default function Input() {

	return (
		<View>
			<TextInput style={tw.style(`h-15 border-2 border-gray-500 w-60 rounded-full px-5`,
						{ fontFamily: 'Montserrat', fontSize: 18 })} 
						placeholder="Username"/>
		</View>
	)
}
