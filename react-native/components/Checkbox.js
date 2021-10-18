import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind'

export default function Checkbox() {
	const [checked, setChecked] = useState(true);
	if (checked) {
		return (
			<View style={tw`w-7 h-7 bg-green-light rounded-md flex`} 
					onTouchStart={()=>setChecked(false)}>
				<FontAwesomeIcon icon={faCheck} style={tw`m-auto text-white`}/>
			</View>
		)		
	} else {
		return (
			<View style={tw`border-gray-500 w-7 h-7 border-2 rounded-md`}
					onTouchStart={()=>setChecked(true)}>
			</View>
		)	
	}

}
