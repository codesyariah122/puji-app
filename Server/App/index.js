import express from 'express'
import { Middlewares } from './Middlewares/index.js'

export const App = (port, next) => {
	const app = express()

	Middlewares(app, express)

	app.listen(port, next())
}