import React from 'react'
import Label from './Label'

export default function Input(props) {
	return (
		<div>
			<Label label={props.label}	/>
			<input type="text"  placeholder={props.placeholder}
					className="appearance-none border-2 rounded-full h-50 border-gray p-3 mt-3 pl-5
								focus:outline-none  focus:border-green "/>
		</div>
	)
}
