import React from 'react'
import Button from './Button'
import Label from './Label'

export default function SolutionBBVA(props) {
    return (
        <div className="w-3/5">
            <Label label={props.label} className="text-green font-medium text-xl"/>
            <p>
                {props.solution}
            </p>
            <ul className="list-disc list-inside">
                <li>
                    {props.uno}
                </li>
                <li>
                    {props.dos}
                </li>
                <li>
                    {props.tres}
                </li>
                <li>
                    {props.cuatro}
                </li>
            </ul>
            <Button label="Visita el sitio" size="w-auto"/>
            <br/>
        </div>
    )
}
