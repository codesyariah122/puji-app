import cors from 'cors'
// import {corsOptions} from '../Configs/corsOptions/index.js;'
import bodyParser from 'body-parser'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import React from 'express-react-views'
import { ApiRouter, WebRouter } from '../Routers/index.js'

export const Middlewares = (app, exp) => {
	let allowLists = [process.env.DEV_ORIGIN, process.env.PROD_ORIGIN]

	const __dirname = dirname(fileURLToPath(import.meta.url))

	let corsOptions = {
		origin: process.env.DEV_ORIGIN
	}

	const reactOption = {
	beautify: true,
		babel: {
			presets: [
				'@babel/preset-react', 
				[ '@babel/preset-env', 
					{'targets': 
						{
							'node': 'current'
						}
					}
				]
			]
		}
	}


	app.use(cors())
	// corsOptions()
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(exp.static('public'))
	
	app.use('/', WebRouter)
	app.use('/api/data', ApiRouter)

	app.engine('jsx', React.createEngine(reactOption))
	app.set('view engine', 'jsx')
	app.set('views', path.join(__dirname, 'views'))
}