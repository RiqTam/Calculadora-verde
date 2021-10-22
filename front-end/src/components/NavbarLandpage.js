import React from 'react'
import ButtonHeader from './ButtonHeader'
import Title from './Title'

export default function NavbarLandpage() {
    return (
        <nav className="flex fixed top-0 w-full p-5 pl-10">
            <Title className="font-black ml-0" title="Dinohacks" textSize="text-2xl">Dinohacks</Title>
            <ul className="select-none flex m-auto w-full pr-10">
                <div className="mr-0 flex m-auto space-x-10">
                    <ButtonHeader label="Sobre Nosotros"/>
                    <ButtonHeader label="Iniciar Sesion"/>
                </div>
            </ul>
        </nav>
    )

}

