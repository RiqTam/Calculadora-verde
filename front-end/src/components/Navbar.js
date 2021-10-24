import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from './Button';
import Title from './Title';
import { Icon } from '@iconify/react';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();
	const auth = useAuth();
    
	const logout = () => {
        auth.signout(()=> history.push("/"));
	};
    return (
        <nav className="flex fixed top-0 w-full p-5 pl-10 bg-white-dark">
            <Link to="/">
                <Title className="font-black ml-0" title="Dinohacks" textSize="text-2xl">Dinocalculadora</Title>
            </Link>
            <ul className="select-none hidden m-auto w-full pr-10 lg:flex">
                <div className="mr-0 flex m-auto space-x-10">
                    <Link to={"/Report"}>
                        <Button label="Agregar Reporte"/>
                    </Link>
                    <Link to={"/Fingerprint"}>
                        <Button label="Ver huella"/>
                    </Link>
                    <Link to={"/Tips"}>
                        <Button label="Ver Consejos"/>
                    </Link>
                    <Link to={"/Progress"}>
                        <Button label="Mi Progreso"/>
                    </Link>
                    <Button label="Salir" onClick={logout}/>
                </div>
            </ul>
            <div className='flex-col flex w-full lg:hidden'>
                <button className=' m-auto mr-0 mt-0' onClick={()=>setShowMenu(!showMenu)}>
                    <Icon icon="dashicons:menu-alt3" className="text-green-defdark" style={{fontSize: '32px'}}/>
                </button>
                {
                    showMenu?
                        <ul className="select-none flex flex-col m-auto mr-0 mb-0 text-white bg-green fixed right-5 top-16">
                            <Link to={"/Report"}>
                                <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold '>Agregar reporte</button>
                            </Link>
                            <Link to={"/Fingerprint"}>
                                <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold border-t-2 border-green-dark'>Ver huella</button>
                            </Link>
                            <Link to={"/Tips"}>
                                <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold border-t-2 border-green-dark'>Ver consejos</button>
                            </Link>
                            <Link to={"/Progress"}>
                                <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold border-t-2 border-green-dark'>Mi progreso</button>
                            </Link>
                            <button className='hover:bg-green-dark py-3 px-5 w-full font-semibold border-t-2 border-green-dark' onClick={logout}>Salir</button>
                        </ul> 
                    :''
                }
                </div>
        </nav>
    )
}

