import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Landpage from '../pages/Landpage'
import PrivateRoute from './PrivateRoute'

export default function Routes() {
	return (
		<Switch>
			<Route path="/about">
				<Landpage />
			</Route>
			<PrivateRoute path="/">
				<Home />
			</PrivateRoute>
		</Switch>
	)
}
