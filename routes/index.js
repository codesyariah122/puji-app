'use strict';

module.exports = (app) => {
const Data = require('../models/Data')
const MyData = require('../MyData')

	app.get('/', (req, res) => {
		const data = {
			"template": "HomeContent.ejs",
			"brand": "Puji.Dev",
			"title": "Home.Page",
			"parallax1": MyData,
			"header": "I <span> Love </span> You When You <span> Love </span>",
		}

		res.render('index', data)
	})

	app.get('/about', (req, res) => {
		const data = {
			"template": "AboutContent.ejs",
			"brand": "Puji.Dev",
			"title": "About.Page",
			"header": "Where <span>Gonna </span>  Make A <span> Big </span> Family"
		}

		res.render('index', data)
	})

	app.get('/project', (req, res) => {
		const data = {
			"template": "ProjectContent.ejs",
			"brand": "Puji.Dev",
			"title": "Project.Page",
			"jobs": MyData,
			"header": "Welcome To <span>Our Place</span>"
		}

			res.render('index', data)		
	})

	// app.get('/project', async (req, res) => {
	// 	try{
	// 		const projects = await Data.find()

	// 		const data = {
	// 			"template": "ProjectContent.ejs",
	// 			"brand": "Puji.Dev",
	// 			"title": "Project.Page",
	// 			"projects": projects,
	// 			"header": "Projects Express.Dev"
	// 		}

	// 		res.render('index', data)			
	// 	}catch(err){
	// 		res.json({message: err})
	// 	}

	// })

	// app.get('/view', async(req, res)=>{
		
	// 	try{
	// 		const projects = await Data.find()
	// 		res.json(projects)	
	// 	}catch(err){
	// 		res.json({message: err})
	// 	}
	// })

	// app.post('/submit', async(req, res)=>{
	// 	const data = new Data({
	// 		title: req.body.title,
	// 		description: req.body.description,
	// 		content: req.body.content
	// 	})

	// 	try{
	// 		const saveData = await data.save()
	// 		res.json(saveData)
	// 	}catch(err){
	// 		res.json({message: err})
	// 	}

	// })

}
