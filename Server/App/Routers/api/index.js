import Router from 'express'
import {heroContent, landingContent, landingContentById, polaroidContent, polaroidContentById, parallaxContent, parallaxContentById, projectContent, projectContentByCompany} from '../../Controllers/index.js'

const ApiRouter = Router()

ApiRouter.get('/hero/show', heroContent)

ApiRouter.get('/landing/show', landingContent)
ApiRouter.get('/landing/show/id/:id', landingContentById)

ApiRouter.get('/polaroid/show', polaroidContent)
ApiRouter.get('/polaroid/show/id/:id', polaroidContentById)

ApiRouter.get('/parallax/show', parallaxContent)
ApiRouter.get('/parallax/show/id/:id', parallaxContentById)

ApiRouter.get('/project/show', projectContent)
ApiRouter.get('/project/show/company/:name', projectContentByCompany)


export default ApiRouter