import Router from 'express'
import Controller from '../controllers/index.js'

const router = Router()

router.get('/', Controller.Home)

export default router