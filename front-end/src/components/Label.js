import React from 'react'

export default function Label(props) {
	return (
		<div className={`font-bold ${props.className}`}>
			{props.label}	
		</div>
	)
}
