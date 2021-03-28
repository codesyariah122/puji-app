import fs, { chmod } from 'fs'
import validator from 'validator'
import UserAgent from 'user-agents'
import axios from 'axios'
import shell from 'shelljs'


async function getIp(){
	return await axios.get('https://api.ipify.org/?format=json')
}

function saveViewer(id, ip, ua, device){
	const viewer = {id, ip, ua, device}
	const fileBuffer = fs.readFileSync('./data/viewer.json', 'utf-8')
	const dataViewers = JSON.parse(fileBuffer)
	const duplicate = dataViewers.find(viewer => viewer.ip == ip)

	if(duplicate){
		return false
	}
	dataViewers.push(viewer)

	fs.writeFileSync('./data/viewer.json', JSON.stringify(dataViewers))
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

		if(!fs.existsSync(dirPath)){
			fs.mkdirSync(dirPath)
			chmod(dirPath, 0o777, (err)=>{
				if(err)
					throw err

				console.log('success')
			})
		}

		if(!fs.existsSync(dataPath)){
			fs.writeFileSync(dataPath, '[]', 'utf-8')
		}

		const fileBuffer = fs.readFileSync('./data/viewer.json', 'utf-8')
		const dataViewers = JSON.parse(fileBuffer)
		const lastId = dataViewers[dataViewers.length - 1]
		id = (dataViewers.length > 1)  ? lastId.id + 1 : id

		saveViewer(id, ip, UaData, device)
	})
}