import React from 'react'
import Input from '../elements/Input'
import Title from '../elements/Title'

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
		</div>

	)
}
