import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../components'
import LoginContext from '../context/LoginContext';

export default function Settings() {
	const {logged, setLogged} = useContext(LoginContext);
	return (
		<View>
			<Text>Settings</Text>
          	<Button onPress={()=>setLogged(false)} label="logout"/>
		</View>
	)
}
