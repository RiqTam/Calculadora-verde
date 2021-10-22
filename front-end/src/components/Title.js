import React from 'react'

export default function Title({title, textSize}) {
	return (
		<div className={`${ textSize || 'text-5xl'} font-black`}>
			{title}
		</div>
	)
}
