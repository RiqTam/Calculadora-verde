import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../components'
import useAuth from '../hooks/useAuth';

export default function Settings() {
	const auth = useAuth();

	const logout = () => {
        auth.signout(()=> console.log("logout"));
	};
	return (
		<View>
			<Text>Settings</Text>
          	<Button onPress={logout} label="logout"/>
		</View>
	)
}
