import React, { useState } from 'react'
import Button from '../components/Button'
import Expence from '../components/Expence'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function NewReport() {
    const [luz, setLuz] = useState(1)
    const [gas, setGas] = useState(2)
    const [gasolina, setGasolina] = useState(3)
    const [agua, setAgua] = useState(4)
	let auth = useAuth();

    async function addReport() {
        const report={
            gasto_luz: luz,
            gasto_gasolina: gasolina,
            gasto_gas: gas,
            gasto_agua: agua,
        } 
        console.log(report)
        await auth.request("bimester/newBimester", "POST", report)
		.then(res => {
			console.log(res.data);
		})
        .catch((error) =>{
			console.log(error);
        });
    }
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
                <Expence className="m-20" label="Gasto bimestral de luz:" value={luz} onChange={setLuz}/>
                <Expence className="m-20" label="Gasto bimestral de gas:" value={gas} onChange={setGas}/>
                <Expence className="m-20" label="Gasto bimestral de gasolina:" value={gasolina} onChange={setGasolina}/>
                <Expence className="m-20" label="Gasto bimestral de agua:" value={agua} onChange={setAgua}/>
                <Button label="Subir datos" onClick={addReport}/>
            </div>
        </div>
    )
}
