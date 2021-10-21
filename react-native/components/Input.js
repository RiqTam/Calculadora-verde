import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import tw from '../tailwind'

export default function Input(props) {
	const [borderColor, setBorderColor] = useState('border-gray-500');
	return (
		<View>
			<Text style={tw.style(`text-black pb-3 text-base`,{ fontFamily: 'MontserratBold'})}>{props.label}</Text>
			<TextInput style={tw.style(`h-13 border-2 ${borderColor} w-full rounded-full px-5 text-base`,
						{ fontFamily: 'Montserrat',  ...props.style})} 
						onBlur={()=>setBorderColor('border-gray-500')}
						onFocus={()=>setBorderColor('border-green-light')}
						placeholder={props.placeholder}/>
		</View>
	)
}
