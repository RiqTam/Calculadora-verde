import React from 'react'
import tailwind from 'tailwind-rn'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Button() {
	return (
		<View>
			<LinearGradient colors={['#188216',  '#70C900']} 
							end={[1,0]}
							start={[0,1]}
							style={tailwind("p-5 rounded-full w-40")}>
				<Text style={tailwind("text-white text-center")}>
					Get Started
				</Text>
			</LinearGradient>
		</View>
	)
}

