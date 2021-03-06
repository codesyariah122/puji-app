import Router from 'express'
import { getHome } from '../../Controllers/index.js'

const WebRouter = Router()

WebRouter.get('/', getHome)

export default WebRouter