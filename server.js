import dotenv from 'dotenv'
import {Server} from './Server/index.js'

dotenv.config()

const PORT = process.env.PORT

Server(PORT)