import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Title from './Title'

export default function Navbar() {
    return (
        <nav className="flex fixed top-0 w-full p-5 pl-10">
            <Link to="/">
                <Title className="font-black ml-0" title="Dinohacks" textSize="text-2xl">Dinohacks</Title>
            </Link>
            <ul className="select-none flex m-auto w-full pr-10">
                <div className="mr-0 flex m-auto space-x-10">
                    <Link to={"/Report"}>
                        <Button label="Agregar Reporte"/>
                    </Link>
                    <Button label="Ver huella"/>
                    <Button label="Salir"/>
                </div>
            </ul>
        </nav>
    )
}

