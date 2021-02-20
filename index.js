import Express from 'express'
import Dotenv from 'dotenv'
import Cors from 'cors'
import BodyParser from 'body-parser'
import Path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import ExpHbs from 'express-handlebars'
import Router from './app/routes/index.js'
import React from 'express-react-views'

Dotenv.config()
const app = Express()
const PORT = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url))

const corsOpion = {
	url: (process.env.CONFIG_PRODUCTION === true) ? 'https://puji-app.herokuapp.com/' : 'http://localhost:5151'
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

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({
	limit: "30mb",
	extended: true
}))
app.use(Cors(corsOpion))

// views with handlebars
// app.engine('hbs', ExpHbs({
// 	defaultLayout: 'main',
// 	extname: '.hbs'
// }))
// app.set('view engine', 'hbs')
// app.set('views', Path.join(__dirname, 'views'))
// views with react
// app.engine('jsx', React.createEngine(reactOption))
// app.set('view engine', 'jsx')
// app.set('views', Path.join(__dirname, 'views'))

// app.use(Express.static('public'))

app.use('/', (req, res, next) => {
	console.log('Aplikasi berjalan... dan diteruskan ke views')
	next()
})
app.use('/', Router)

app.listen(PORT, ()=>console.log(`Server running on Port : ${PORT}`))