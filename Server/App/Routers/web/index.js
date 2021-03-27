import Router from 'express'
import { getHome, getContact } from '../../Controllers/index.js'

const WebRouter = Router()

WebRouter.get('/', getHome)
WebRouter.get('/contact', getContact)

export default WebRouter