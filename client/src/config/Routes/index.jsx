
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, MainApp } from '../../pages'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/about">
					<About/>
				</Route>
				<Route path="/home">
					<Home/>
				</Route>
				<Route path="/">
					<MainApp/>
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes