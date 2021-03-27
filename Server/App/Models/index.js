import {HeroContent, PanelContent, LandingContent, PolaroidContent, ParallaxContent, ProjectData, ProductData} from '../Configs/index.js'

export const getHero = () => {
	return HeroContent
}

export const getPanel = () => {
	return PanelContent
}

export const getLanding = () => {
	return LandingContent
}

export const getLandingById = id => {
	const row = LandingContent.find(d => d.id == id)
	return (!row) ? [{message: `Data with id : ${id}, Not Found`}] : row
}

export const getPolaroid = () => {
	return PolaroidContent
}

export const getPolaroidById = id => {
	const row = PolaroidContent.find(d => d.id == id)
	return (!row) ? [{message: `Data with id : ${id} Not Found`}] : row
}

export const getParallax = () => {
	return ParallaxContent
}

export const getParallaxById = id => {
	const row = ParallaxContent.find(d => d.id == id)
	return (!row) ? [{message: `Data with id : ${id} Not Found`}] : row
}

export const getProject = () => {
	return ProjectData
}

export const getProjectByCompany = name => {
	const row = ProjectData.find(d => d.company == name)
	return (!row) ? [{message: `Data with name : ${name} Not Found`}] : row
}

export const getProduct = () => {
	return ProductData
}

export const getProductById = id => {
	const row = ProductData.find(d => d.id == id)
	return (!row) ? [{message: `Data with name : ${name} Not Found`}] : row
}