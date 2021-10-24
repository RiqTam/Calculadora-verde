import React from 'react'

export default function Dialog({dialog, className}) {
	return (
		<div className={`flex mt-5 ${className}`}>
			<div className='border-2 border-gray  rounded-3xl p-3 px-5 w-auto m-auto mr-0 text-xl'>
				{dialog}
			</div>
		</div>
	)
}
