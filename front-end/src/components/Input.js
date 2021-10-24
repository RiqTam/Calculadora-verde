import React from 'react'
import Label from './Label'

export default function Input({label, placeholder, value, onChange, type}) {
	return (
		<div>
			<Label label={label}	/>
			<input type={type}  placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)}  
					className="appearance-none border-2 rounded-full h-50 border-gray p-3 mt-3 pl-5
								focus:outline-none  focus:border-green w-full"/>
		</div>
	)
}
