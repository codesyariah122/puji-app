import { App } from './App/index.js'

export const Server = (port) => {
	App(port, () => {
		console.log(`Server sudah mengudara di port : ${port}`)
	})
}