import fs from 'fs'
import validator from 'validator'
import UserAgent from 'express-useragent'

export const logViewer = () => {
	console.log(UserAgent)
}