import React from 'react';
import tw from '../../tailwind';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextMontserrat from './TextMontserrat';

export default function Button() {
	return (
		<View>
			<LinearGradient colors={['#188216',  '#70C900']} 
							end={[1,0]}
							start={[0,1]}
							style={tw`p-5 rounded-full w-40 h-15 flex`}>
				<TextMontserrat style={tw`text-white text-center m-auto`}>
					Get Started
				</TextMontserrat>
			</LinearGradient>
		</View>
	)
}

