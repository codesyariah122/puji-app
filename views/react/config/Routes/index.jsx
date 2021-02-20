import React, {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About } from '../../pages'

const Routes = () => {
	return (
		<Fragment>
		<Router>
			<Switch>
				<Route path="/">
					<Home/>
				</Route>

				<Route path="/about">
					<About/>
				</Route>
			</Switch>
		</Router>
		</Fragment>
	)
}

export default Routes