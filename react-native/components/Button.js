import React from 'react';
import tw from '../tailwind';
import {  View, Text,  TouchableHighlight, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(props) {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={props.style}>
			<LinearGradient colors={[tw.color('green-dark'),  tw.color('green-light')]} 
							end={[1,0]}
							start={[0,1]}
							style={tw`p-5 rounded-full w-full h-13 flex`}>
				<Text style={tw`text-white text-center m-auto text-base`}>
					{props.label}
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

