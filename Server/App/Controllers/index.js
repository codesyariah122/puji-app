import { getHero, getLanding, getLandingById, getPolaroid, getPolaroidById, getParallax, getParallaxById, getProject, getProjectByCompany, getProduct, getProductById} from '../Models/index.js'

export const getHome = (req, res) => {
	const data = {
		title: "A dead Simple",
		description: "Puji Ermanto as a Web Developer",
		author: "Puji Ermanto",
		hero: getHero(),
		landing: getLanding()
	}

	res.render('index', data)
}

export const heroContent = async(req, res) => {
	try{
		res.status(200).json({
			data: await getHero()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const landingContent = async(req, res) => {
	try{
		res.status(200).json({
			data: await getLanding()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const landingContentById = async(req, res) => {
	const id = req.params.id
	try{
		res.status(200).json({
			data: await getLandingById(id)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const polaroidContent = async(req, res) => {
	try{
		res.status(200).json({
			data: await getPolaroid()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const polaroidContentById = async(req, res) => {
	const id = req.params.id
	try{
		res.status(200).json({
			data: await getPolaroidById(id)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const parallaxContent = async(req, res) => {
	try{
		res.status(200).json({
			data: await getParallax()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const parallaxContentById = async(req, res) => {
	const id = req.params.id
	try{
		res.status(200).json({
			data: await getParallaxById(id)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const productData = async(req, res) => {
	try{
		res.status(200).json({
			data: await getProduct()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const productDataById = async(req, res) => {
	const id = req.params.id
	try{
		res.status(200).json({
			data: await getProductById(id)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const projectContent = async(req, res) => {
	try{
		res.status(200).json({
			data: await getProject()
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}

export const projectContentByCompany = async(req, res) => {
	const name = req.params.name
	try{
		res.status(200).json({
			data: await getProjectByCompany(name)
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}	
}