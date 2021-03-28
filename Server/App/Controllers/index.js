import { getViewer, getMenu, getHero, getPanel, getLanding, getLandingById, getPolaroid, getPolaroidById, getParallax, getParallaxById, getProject, getProjectByCompany, getProduct, getProductById} from '../Models/index.js'

// For web router data
export const getHome = (req, res) => {
	const data = {
		baseurl: process.env.BASE_URL,
		title: "A dead Simple",
		description: "Puji Ermanto as a Web Developer",
		author: "Puji Ermanto",
		keyword: "Puji Ermanto Landing Page",
		og: {
			title: "Puji Ermanto LandingPage",
			desc: "Halo , ini adalah landing page saya barangkali ada yang berminat mengajak saya untuk gabung di project kalian, saya siap dengan bergabung di project kalian.",
			url: "https://pujiermanto.netlify.app",
			image: "/images/home/vector1.gif"
		},
		header: "My Header Page",
		navs: getMenu(),
		footer: "My Footer Page",
		hero: getHero(),
		landing: getLanding(),
		panel: getPanel(),
		prod: process.env.CONFIG_PRODUCTION,
	}

	res.render('pages/home', data)
}

export const getContact = (req, res) => {
	const data = {
		title: "A dead Simple",
		description: "Puji Ermanto as a Web Developer",
		author: "Puji Ermanto",
		keyword: "I Love You When You Love Me, Where gonna make a big familly",
		header: "My Contact Page",
		navs: NavMenu(),
		footer: "My Footer Page",
		hero: getHero(),
		landing: getLanding(),
		panel: getPanel(),
		prod: process.env.CONFIG_PRODUCTION
	}
	// res.render('pages/contact', data)
	res.status(200).json({
		message: 'Masih dalam pengembangan bradeurrqu ... still wait lah !',
		data: {
			listApi: {
				ExampleProduct: 'https://puji-app.herokuapp.com/api/data/product/show',
			}
		}
	})
}


// For api router data
export const logViewer = async(req, res) => {
	try{
		res.status(200).json({
			data:await getViewer()
		})
	}catch(err){
		res.status(404).json({
			message: err.response
		})
	}
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