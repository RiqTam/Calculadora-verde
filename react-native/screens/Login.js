import React, {  useState } from 'react'
import { View } from 'react-native'
import { Button, H1, Input, Span } from '../components'
import useAuth from '../hooks/useAuth';
import tw from '../tailwind'

export default function Login({setshowLogin}) {
	const auth = useAuth();
	const [phone, setPhone] = useState('5541744839');
	const [password, setPassword] = useState('abdiel123');


	function login() {
		const user={
			phone,
			password
		}
		auth.signin(user, () => {
			setshowLogin(false);
		});
	};

	return (
		<>
			<View style={tw`w-full pl-5`}>
				<Span style={tw`text-left text-lg`}>By Dinohacks</Span>
			</View>
			<View style={tw`items-center flex px-10`}>

				<H1 style={tw`m-5 mt-20`}>Iniciar Sesión</H1>
				<View style={tw`m-3 w-full`}>
					<Input label="Número de Telefono" placeholder="Ingresa tu No. Telefono" value={phone} onChangeText={setPhone}/>
				</View>
				<View style={tw`m-3 mb-10 w-full`}>
					<Input label="Password" placeholder="Ingresa tu password" value={password} onChangeText={setPassword} password={true}/>
					<Span style={tw`mt-3 text-right`}>¿Olvidaste tu contraseña?</Span>
				</View>
				<Button label="Iniciar Sesión" style={tw`w-full `} onPress={login} />
				<Span>¿Aún no tienes cuenta?</Span>
				<Span>Registrate ahora</Span>
			</View>
		</>
	)
}
