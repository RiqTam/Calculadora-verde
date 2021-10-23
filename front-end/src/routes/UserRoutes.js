import React from 'react'
import { Switch } from 'react-router-dom'
import Fingerprint from '../pages/Fingerprint'
import NewReport from '../pages/NewReport'
import Progress from '../pages/Progress'
import Tips from '../pages/Tips'
import Welcome from '../pages/Welcome'
import PrivateRoute from './PrivateRoute'

export default function UserRoutes() {

	return (
		<Switch>
				<PrivateRoute path="/Report">
					<NewReport />
				</PrivateRoute>
				<PrivateRoute path="/Progress">
					<Progress />
				</PrivateRoute>
				<PrivateRoute path="/Fingerprint">
					<Fingerprint />
				</PrivateRoute>
				<PrivateRoute path="/Tips">
					<Tips />
				</PrivateRoute>
				<PrivateRoute path="/">
					<Welcome />
				</PrivateRoute>
		</Switch>
	)
}
