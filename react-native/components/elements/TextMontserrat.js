import React from 'react';
import tw from '../../tailwind';
import { View, Text } from 'react-native'
import {useFonts, Montserrat_400Regular} from '@expo-google-fonts/montserrat';

export default function TextMontserrat(props) {
	let [fontsLoaded] = useFonts({
    	Montserrat_400Regular,
  	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>{props.children}</Text>
			</View>
		);
	} else {
		return (
			<View>
				<Text style={tw.style(props.style || tw`text-black` , { fontFamily: 'Montserrat_400Regular', fontSize: 18 })}>{props.children}</Text>
			</View>
		);
	}
}
