import React from 'react'
import Button from '../components/Button'
import ButtonHeader from '../components/ButtonHeader'
import Input from '../components/Input'
import Title from '../components/Title'

export default function UIElements() {
	return (
		<div className="p-5">
			<div className="mb-5">
				<Title title="Calculadora Verde"/>
			</div>

			<div className="mb-5">
				<p>
					some Paragraph
				</p>
			</div>

			<div className="mb-5">
				<Input label="Email" placeholder="user@email.com" />
			</div>
			<Button /> <br />
			<div className='bg-gradient-to-r from-green-dark to-green p-3'>
				<ButtonHeader label={"some button"} onClick={()=>console.log("wololo")}/>
			</div>
		</div>

	)
}
