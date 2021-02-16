// import MyModel from '../models/index.js'
import MyData from '../data/MyData.js'
const Home = (req, res) => {
	const data = {
		title: "HomePage",
		header: "Welcome Lo:Fi",
		brand: "LofiDev",
		url: req.originalUrl,
		footer: `Copyright@${new Date().getFullYear()}`,
		links: [
			{label: "Home", url: "/"},
			{label: "About", url: "/about"}
		],
		parallax: MyData.ParallaxContent[0],
		polaroid: MyData.PolaroidContent[0]
	}
	res.render('pages/home', data)
}

export default {Home}