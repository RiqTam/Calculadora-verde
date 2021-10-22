import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewReport from '../pages/NewReport'
import Welcome from '../pages/Welcome'
import PrivateRoute from './PrivateRoute'

export default function UserRoutes() {

	return (
		<Switch>
			<PrivateRoute path="/Report">
				<NewReport />
			</PrivateRoute>
			<PrivateRoute path="/">
				<Welcome />
			</PrivateRoute>
		</Switch>
	)
}
