const express = require('express')

const path = require('path')

const app = express()

const port = process.env.PORT || 3000

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

require('dotenv/config')



// middlewares
app.use(bodyParser.json())

// import routes
const Router = require('./routes/index')

// const postRoute = require('./routes/posts')

// app.use('/posts', postRoute)

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')


Router(app)
// Routes
// app.get('/', (req, res)=>{
// 	res.send('We are on home')
// });

// app.get('/posts', (req, res)=>{
// 	res.send('We are on Posts')
// });

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
	{useNewUrlParser: true}, 
	() => console.log('connected to DB !')
);

app.listen(port, () => {
	console.log(`Server run on ${port}`)
});