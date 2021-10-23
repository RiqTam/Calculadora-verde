import React from 'react'
import Button from './Button'

export default function Tip(props) {
    return (
        <div className="w-1/2">
            <p>
                {props.text1}
                <br/><br/>
                {props.text2}
            </p>
            <br/>
            <Button label="Conoce más aquí" size="w-auto"/>
            <br/>
        </div>
    )
}
