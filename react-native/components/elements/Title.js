import React from 'react'
import { View, Text } from 'react-native'
import {useFonts, Montserrat_900Black} from '@expo-google-fonts/montserrat';
import tw from '../../tailwind';

export default function Title(props) {
	let [fontsLoaded] = useFonts({
    	Montserrat_900Black,
  	});

	if (!fontsLoaded) {
		return (
		<View>
			<Text>{props.children}</Text>
		</View>
		)
	} else {
		return (
		<View>
			<Text style={tw.style(`text-black`,{ fontFamily: 'Montserrat_900Black', fontSize: props.fontSize || 40 })}>{props.children}</Text>
		</View>
		);
	}
}
