import dotenv from 'dotenv'
import {Server} from './Server/index.js'
import {logViewer} from './Server/App/helpers/logViewer.js'

dotenv.config()

const PORT = process.env.PORT

logViewer()

Server(PORT)