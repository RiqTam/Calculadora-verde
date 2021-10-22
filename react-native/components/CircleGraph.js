import React from 'react'
import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'
import tw from '../tailwind'

export default function CircleGraph({size, thickness, from, to, percentage}) {
	const svgMarkup=`
	<svg viewBox="-2 -2 40 40" >
		<defs>
			<linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" style="stop-color:${from || "#F00"};stop-opacity:1" />
			<stop offset="100%" style="stop-color:${to || "#FF0"};stop-opacity:1" />
			</linearGradient>
		</defs>
		<path
			d="M18 2.0845
			a 15.9155 15.9155 0 0 1 0 31.831
			a 15.9155 15.9155 0 0 1 0 -31.831"
			fill="none"
			stroke-linecap="round"
			stroke="${tw.color("textLight")}"
			stroke-width="${thickness || "15%"}"
			stroke-dasharray="100, 100"
		/>
		<path
			d="M18 2.0845
			a 15.9155 15.9155 0 0 1 0 31.831
			a 15.9155 15.9155 0 0 1 0 -31.831"
			fill="none"
			stroke-linecap="round"
			stroke="url(#grad2)"
			stroke-width="${thickness || "15%"}"
			stroke-dasharray="${percentage || 50}, 100"
		/>

		<text x="18" y="20" text-anchor="middle" fill="black" font-size="8px"
			 stroke-width="0px" dy=".1em">${percentage+'%'}</text>

	</svg>
	`
	return (
		<View style={tw`w-${size || 'full'} h-${size || 'full'} justify-center items-center `}>
			<SvgXml xml={svgMarkup} width="100%" height={"100%"}/>
		</View>
	)
}
