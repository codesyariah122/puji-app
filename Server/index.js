import { App } from './App/index.js'

export const Server = (port, baseurl, next) => {
	App(port, () => {
		console.log(`Server sudah mengudara di port : ${baseurl}`)
	})
}