import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landpage from '../pages/Landpage'

export default function RoutesLandpage() {
	return (
		<Switch>
			<Route path="/about">
				<Landpage />
			</Route>
			<Route path="/Login">
				<Landpage />
			</Route>
			<Route path="/">
				<Landpage />
			</Route>
		</Switch>
	)
}
