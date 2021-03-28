import dotenv from 'dotenv'
import {Server} from './Server/index.js'
import {logViewer} from './Server/App/helpers/logViewer.js'

dotenv.config()

const port = process.env.PORT
const baseurl = process.env.BASE_URL

logViewer()

Server(port, baseurl)