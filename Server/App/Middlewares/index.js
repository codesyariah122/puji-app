import cors from 'cors'
import bodyParser from 'body-parser'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import React from 'express-react-views'
import { ApiRouter, WebRouter } from '../Routers/index.js'

export const Middlewares = (app, exp) => {
	const __dirname = dirname(fileURLToPath(import.meta.url))
	const corsOption = {
		origin: (process.env.CONFIG_PRODUCTION == 'true') ? process.env.PROD_ORIGIN : process.env.DEV_ORIGIN
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


	app.use(cors(corsOption))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(exp.static('public'))
	
	app.use('/', WebRouter)
	app.use('/api/data', ApiRouter)

	app.engine('jsx', React.createEngine(reactOption))
	app.set('view engine', 'jsx')
	app.set('views', path.join(__dirname, 'views'))
}