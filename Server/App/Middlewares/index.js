import cors from 'cors'
// import {corsOptions} from '../Configs/corsOptions/index.js;'
import bodyParser from 'body-parser'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import React from 'express-react-views'
import { ApiRouter, WebRouter } from '../Routers/index.js'
import ExpHbs from 'express-handlebars'
import hbsHelper from '../helpers/hbsHelper.js'

export const Middlewares = (app, express) => {
	let allowLists = [process.env.DEV_ORIGIN, process.env.PROD_ORIGIN]

	const __dirname = dirname(fileURLToPath(import.meta.url))

	let corsOptions = {
		origin: process.env.DEV_ORIGIN
	}

	// for express react views (jsx)
	// const reactOption = {
	// beautify: true,
	// 	babel: {
	// 		presets: [
	// 			'@babel/preset-react', 
	// 			[ '@babel/preset-env', 
	// 				{'targets': 
	// 					{
	// 						'node': 'current'
	// 					}
	// 				}
	// 			]
	// 		]
	// 	}
	// }
	// app.engine('jsx', React.createEngine(reactOption))
	// app.set('view engine', 'jsx')
	app.engine('hbs', ExpHbs({
		defaultLayout: 'main',
		extname: 'hbs',
		helpers: hbsHelper
	}))
	app.set('view engine', 'hbs')
	
	// Cors
	app.use(cors())
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(express.static('public'))
	// Router
	app.use('/api/data', ApiRouter)
	app.use('/', WebRouter)

	app.set('views', path.join(__dirname, 'views'))
}