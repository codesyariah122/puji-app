const {Router} = require('express')
// const DataModels = require('../models')
const Home = require('../controllers')
const Api = require('../controllers')
const Test = require('../controllers')
const router = Router()



router.get('/', Home.GetHomePage)

router.get('/api/users', Api.ApiController)

// test api route
router.get('/api/testdata', Test.TestDataApi)

module.exports = router
