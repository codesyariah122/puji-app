const DataApi = require('../models')
const SampleData = require('../data')

exports.GetHomePage = (req, res) => {
	// const data = {
	// 	title: 'Home Page',
	// 	header: 'Welcome in Home Page'
	// }
	// res.render('index', data)
	res.status(200).json({
		message: 'Hello World'
	})
}

exports.TestDataApi = async(req, res) => {
	try{
		const data = await SampleData.ProjectData
		res.json(data)
	}catch(err){
		console.log(err)
	}
}

exports.ApiController = async(req, res, next) =>{
	try{
		const user = await DataApi.getUsers()
		return res.status(200).json(user)
	}catch(err){
			console.log(err)
	}
}
