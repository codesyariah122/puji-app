import { getQuran} from '../Models/index.js'

export const AlQuran = async(req, res) => {
	try{
		const data = await getQuran()
		res.status(200).json({
			data
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}