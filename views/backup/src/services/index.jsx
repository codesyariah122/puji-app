import fetch from 'node-fetch'

export const getHero = async() => {
	const res = await fetch('http://localhost:8081/api/data/hero/show')
	return res.json()
}