import React from 'react'
import Expence from '../components/Expence'

export default function NewReport() {
    return (
        <div>
            <div className="border-b-2 m-20">
                <h1 className="text-green-dark font-black text-4xl">
                    Ayudanos a medir tu influencia en el<br/> medio ambiente...
                </h1>
                <br/>
                <h2 className="font-semibold text-lg mb-5">
                    Necesitamos un poco de información sobre los gastos de tu empresa
                </h2>
                <br/>   
            </div>
            <div className="m-20">
                <Expence className="m-20"/>
            </div>
        </div>
    )
}
