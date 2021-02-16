import Express from 'express'
import Dotenv from 'dotenv'
import Cors from 'cors'
import Path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import ExpHbs from 'express-handlebars'
import Router from './app/routes/index.js'

Dotenv.config()
const app = Express()
const PORT = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(Cors())
app.use('/', Router)
app.use(Express.static('public'))

app.engine('hbs', ExpHbs({
	defaultLayout: 'main',
	extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', Path.join(__dirname, 'views'))

app.listen(PORT, ()=>console.log(`Server running on Port : ${PORT}`))