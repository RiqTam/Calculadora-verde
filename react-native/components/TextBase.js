import React from 'react'
import { View, Text } from 'react-native'
import tw from '../tailwind'

export default function TextBase(props) {
	return (
		<Text style={tw.style(`text-base`, props.style)}>{props.children}</Text>
	)
}
