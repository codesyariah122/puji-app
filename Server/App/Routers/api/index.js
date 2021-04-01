import Router from 'express'
import {AlQuran} from '../../Controllers/quran.js'
import {getLogViewer, heroContent, landingContent, landingContentById, polaroidContent, polaroidContentById, parallaxContent, parallaxContentById, projectContent, projectContentByCompany, productData, productDataById} from '../../Controllers/index.js'

const ApiRouter = Router()

// quran api
ApiRouter.get('/quran/show', AlQuran)

ApiRouter.get('/viewer/show', getLogViewer)

ApiRouter.get('/hero/show', heroContent)

ApiRouter.get('/landing/show', landingContent)
ApiRouter.get('/landing/show/id/:id', landingContentById)

ApiRouter.get('/polaroid/show', polaroidContent)
ApiRouter.get('/polaroid/show/id/:id', polaroidContentById)

ApiRouter.get('/parallax/show', parallaxContent)
ApiRouter.get('/parallax/show/id/:id', parallaxContentById)

ApiRouter.get('/project/show', projectContent)
ApiRouter.get('/project/show/company/:name', projectContentByCompany)

ApiRouter.get('/product/show', productData)
ApiRouter.get('/product/show/id/:id', productDataById)


export default ApiRouter