import React, { useState } from 'react'
import ButtonHeader from './ButtonHeader'
import Title from './Title'
import { Icon } from '@iconify/react';

export default function NavbarLandpage({setShowLogin}) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex fixed top-0 w-full p-5 pl-10 z-10">
            <Title className="font-black ml-0" title="Dinocalculadora" textSize="text-2xl">Dinocalculadora</Title>
            <ul className="select-none hidden m-auto w-full pr-10 md:flex">
                <div className="mr-0 flex m-auto space-x-10">
                    <ButtonHeader label="Sobre Nosotros" onClick={()=>setShowLogin(false)}/>
                    <ButtonHeader label="Iniciar Sesion" onClick={()=>setShowLogin(true)}/>
                </div>
            </ul>
            <div className='flex-col flex w-full md:hidden'>
                <button className=' m-auto mr-0 mt-0' onClick={()=>setShowMenu(!showMenu)}>
                    <Icon icon="dashicons:menu-alt3" className="text-green-defdark" style={{fontSize: '32px'}}/>
                </button>   
                {
                    showMenu?
                        <ul className="select-none flex flex-col m-auto mr-0 text-white bg-green ">
                            <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold' onClick={()=>setShowLogin(false)}>Sobre Nosotros</button>
                            <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold border-t-2 border-green-dark' onClick={()=>setShowLogin(true)}>Iniciar Sesion</button>
                        </ul>                
                    :''
                }
            </div>
        </nav>
    )

}

