import fs, { chmod } from 'fs'
import validator from 'validator'
import UserAgent from 'user-agents'
import axios from 'axios'
import shell from 'shelljs'
// import cookieSession from 'cookie-session'


async function getIp(){
	return await axios.get('https://api.ipify.org/?format=json')
}

function saveViewer(id, ip, ua, device){
	const viewer = {id, ip, ua, device}
	const fileBuffer = fs.readFileSync('./data/viewer.json', 'utf-8')
	const viewers = JSON.parse(fileBuffer)
	const duplicate = viewers.find(viewer => viewer.ip === ip)

	if(duplicate){
		return false
	}
	viewers.push(viewer)

	fs.writeFileSync('./data/viewer.json', JSON.stringify(viewers))
}

export const logViewer = () => {
	// console.log(ua)
	getIp()
	.then(res => {
		let id = 1
		const device = shell.exec('uname -a', {silent: true}).stdout
		const UA = new UserAgent()
		const UaData = UA.data.userAgent
		const ip = res.data.ip
		const dirPath = './data'
		const dataPath = './data/viewer.json'

		// untuk development setup
		// if(!fs.existsSync(dirPath)){
		// 	fs.mkdirSync(dirPath)
		// 	chmod(dirPath, 0o777, (err)=>{
		// 		if(err)
		// 			throw err

		// 		console.log('success')
		// 	})
		// }

		// if(!fs.existsSync(dataPath)){
		// 	fs.writeFileSync(dataPath, '[]', 'utf-8')
		// }

		const fileBuffer = fs.readFileSync('./data/viewer.json', 'utf-8')
		const viewers = JSON.parse(fileBuffer)
		const lastId = viewers[viewers.length - 1]
		// console.log(lastId)
		id = (viewers.length > 0)  ? lastId.id + 1 : id

		saveViewer(id, ip, UaData, device)
	})
}