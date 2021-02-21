import Router from 'express'
import {HomePage, AboutPage, AllDataPage} from '../controllers/index.js'

const router = Router()

router.get('/', HomePage)
router.get('/about', AboutPage)
router.get('/api/alldata', AllDataPage)

export default router