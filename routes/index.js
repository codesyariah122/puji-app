const {Router} = require('express')
// const DataModels = require('../models')
const Home = require('../controllers')
const Api = require('../controllers')
const Test = require('../controllers')
const router = Router()


route.get('*', (req, res) => {
	res.sendFile(Path.join(`${__dirname}/client/build/index.html`))
})

router.get('/', Home.GetHomePage)

router.get('/api/users', Api.ApiController)

// test api route
router.get('/api/testdata', Test.TestDataApi)

module.exports = router
