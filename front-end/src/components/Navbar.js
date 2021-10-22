import React from 'react'
import Button from './Button'

export default function Navbar() {
    return (
        <nav className="flex">
            <ul className="select-none flex m-auto">
                <span className="font-black ml-0-">Dinohacks</span>
                <Button label="Agregar Reporte"/>
                <Button label="Ver huella"/>
                <Button label="Salir"/>
            </ul>
        </nav>
    )
}

