import React from 'react'
import ButtonHeader from './ButtonHeader'
import Title from './Title'

export default function NavbarLandpage({setShowLogin}) {
    return (
        <nav className="flex fixed top-0 w-full p-5 pl-10 z-10">
            <Title className="font-black ml-0" title="Dinohacks" textSize="text-2xl">Dinohacks</Title>
            <ul className="select-none flex m-auto w-full pr-10">
                <div className="mr-0 flex m-auto space-x-10">
                    <ButtonHeader label="Sobre Nosotros" onClick={()=>setShowLogin(false)}/>
                    <ButtonHeader label="Iniciar Sesion" onClick={()=>setShowLogin(true)}/>
                </div>
            </ul>
        </nav>
    )

}

