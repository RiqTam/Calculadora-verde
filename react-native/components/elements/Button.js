import React from 'react';
import tw from '../../tailwind';
import {  View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button() {
	return (
		<View>
			<LinearGradient colors={['#188216',  '#70C900']} 
							end={[1,0]}
							start={[0,1]}
							style={tw`p-5 rounded-full w-40 h-15 flex`}>
				<Text style={tw`text-white text-center m-auto`}>
					Get Started
				</Text>
			</LinearGradient>
		</View>
	)
}

