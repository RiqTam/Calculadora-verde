import React from 'react'
import { View, Text } from 'react-native'
import { Button, H1, Input, Span } from '../components'
import tw from '../tailwind'

export default function Login() {
	return (
		<View style={tw`items-center flex px-10`}>
			<H1 style={tw`m-5 mt-20`}>Iniciar Sesión</H1>
			<View style={tw`m-3 w-full`}>
				<Input label="Número de Cuenta" placeholder="Ingresa tu No. Cuenta"/>
			</View>
			<View style={tw`m-3 mb-10 w-full`}>
				<Input label="Password" placeholder="Ingresa tu password" />
				<Span style={tw`mt-3`}>¿Olvidaste tu contraseña?</Span>
			</View>
			<Button label="Iniciar Sesión" style={tw`w-full `} onPress={()=>console.log("Iniciar sesion")} />
			<Span>¿Aún no tienes cuenta?</Span>
			<Span>Registrate ahora</Span>
		</View>
	)
}
