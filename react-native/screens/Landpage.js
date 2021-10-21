import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from '../components';
import Title from '../components/Title';
import LoginContext from '../context/LoginContext';
import tw from '../tailwind';

export default function Landpage() {
	const {logged, setLogged} = useContext(LoginContext);
	return (
		<View style={tw`p-10`}>
			<Title>Calculadora Verde - Logged In</Title>
          	<Button onPress={()=>setLogged(false)} label="logout"/>
		</View>
	)
}
