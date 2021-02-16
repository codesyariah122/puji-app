import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
	const data = {
		title: "HomePage",
		header: "Welcome in MyPage",
		footer: `Copyright@${new Date().getFullYear()}`
	}
	res.render('pages/home', data)
})

export default router