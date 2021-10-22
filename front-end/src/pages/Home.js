import React from 'react'
import Navbar from '../components/Navbar'
import UserRoutes from '../routes/UserRoutes'

export default function Home() {
	return (
		<div>
			<Navbar />	
			<UserRoutes />	
		</div>
	)
}
