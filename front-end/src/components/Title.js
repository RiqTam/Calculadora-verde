import React from 'react'

export default function Title({title, textSize, className}) {
	return (
		<div className={`${ textSize || 'text-5xl'} font-black ${className}`}>
			{title}
		</div>
	)
}
