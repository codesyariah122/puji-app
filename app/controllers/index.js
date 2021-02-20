import getAllDataPage from '../models/index.js'
import MyData from '../data/MyData.js'

// export const DefaultPage = (req, res, next) => {
// 	const data = {
// 		title: "HomePage",
// 		header: "Welcome Lo:Fi",
// 		brand: "LofiDev",
// 		url: req.originalUrl,
// 		footer: `Copyright@${new Date().getFullYear()}`,
// 		links: [
// 			{label: "Home", url: "/"},
// 			{label: "About", url: "/about"}
// 		],
// 		parallax: MyData.ParallaxContent[0],
// 		polaroid: MyData.PolaroidContent[0]
// 	}
// 	res.render('pages/home', data)
// }

export const AllDataPage = async(req, res, next) => {
	try{
		const alldata = await getAllDataPage
		res.status(200).json(alldata)
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}