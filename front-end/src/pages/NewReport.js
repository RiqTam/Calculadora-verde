import React from 'react'
import Button from '../components/Button'
import Expence from '../components/Expence'
import Title from '../components/Title'

export default function NewReport() {
    return (
        <div className='p-10 pt-28 md:p-32'>
            <Title title={"Agregar Reporte"} />
            <div className="border-b-2 mt-14 border-gray">
                <h1 className="text-green-dark font-black text-4xl">
                    Ayudanos a medir tu influencia en el<br/> medio ambiente...
                </h1>
                <br/>
                <h2 className="font-semibold text-lg mb-5">
                    Necesitamos un poco de información sobre los gastos de tu empresa
                </h2>
                <br/>   
            </div>
            <div className="mt-20 flex-col flex space-y-10 xl:w-1/2">
                <Expence className="m-20" label="Gasto bimestral de luz:"/>
                <Expence className="m-20" label="Gasto bimestral de gas:"/>
                <Expence className="m-20" label="Gasto bimestral de gasolina:"/>
                <Expence className="m-20" label="Gasto bimestral de agua:"/>
                <Button label="Subir datos"/>
            </div>
        </div>
    )
}
