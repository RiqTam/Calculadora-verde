import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import useAuth from '../hooks/useAuth'

export default function Progress() {
	const auth = useAuth();
	const [bimesters, setBimesters] = useState([]);

	useEffect(() => {
		auth.request("bimester/getMyBimester","POST")
		.then(res => {
			console.log(res.data);
			setBimesters(res.data);
		})
        .catch((error) =>{
			console.log(error);
        });

	}, [])

	return (
		<div className='p-32'>
			<Title title={"Mi Progreso"} />	
			{bimesters.map((bimester, i )=>(
				<p key={i}>Gasto luz: {bimester.gasto_luz}</p>
			))}
		</div>
	)
}
