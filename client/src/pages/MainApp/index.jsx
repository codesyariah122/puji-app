import React, {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'

const MainApp = () => {
	return (
		<Fragment>
			<h2>Header</h2>

				<Router>
					<Switch>

						<Route path="/about">
							<About/>
						</Route>

						<Route path="/">
							<Home/>
						</Route>

					</Switch>
				</Router>

			<h3>Footer</h3>
		</Fragment>
	)
}

export default MainApp