import React from 'react'
import Checkbox from './Checkbox'
import Input from './Input'

export default function Expence(props) {
    return (
        <div className="">
            <Input label={props.label} placeholder="Ingresa la cantidad en pesos mexicanos"/>
            <Checkbox label="Prefiero no decirlo o no aplica" className="m-auto mb-4 ml-10 my-4"/>
        </div>
    )
}
