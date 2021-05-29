import Router from 'express'
import { getHome, getContact } from '../../Controllers/index.js'

const WebRouter = Router()
WebRouter.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://puji-app.herokuapp.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})
WebRouter.get('/', getHome)
WebRouter.get('/contact', getContact)

export default WebRouter
