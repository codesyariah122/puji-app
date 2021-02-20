import Router from 'express'
import {AllDataPage} from '../controllers/index.js'

const router = Router()

// router.get('/', DefaultPage)
router.get('/api/alldata', AllDataPage)

export default router