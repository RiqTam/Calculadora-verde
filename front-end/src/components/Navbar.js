import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Button from './Button'
import Title from './Title'

export default function Navbar() {
    const history = useHistory();
	const auth = useAuth();
    
	const logout = () => {
        auth.signout(()=> history.push("/"));
	};
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
        </nav>
    )
}

