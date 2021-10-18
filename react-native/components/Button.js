import React from 'react';
import tw from '../tailwind';
import {  View, Text,  TouchableHighlight, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(props) {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={props.style}>
			<LinearGradient colors={['#188216',  '#70C900']} 
							end={[1,0]}
							start={[0,1]}
							style={tw`p-5 rounded-full w-40 h-15 flex`}>
				<Text style={tw`text-white text-center m-auto`}>
					Get Started
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

