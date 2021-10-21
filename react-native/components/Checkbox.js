import React, { useState } from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind'
import { MaterialIcons } from '@expo/vector-icons';

export default function Checkbox() {
	const [checked, setChecked] = useState(true);
	if (checked) {
		return (
			<View style={tw`w-7 h-7 bg-green-light rounded-md flex`} 
					onTouchStart={()=>setChecked(false)}>
				<MaterialIcons name="check" style={tw`m-auto text-white text-center`} size={25}/>
				
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
