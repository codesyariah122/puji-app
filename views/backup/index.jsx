import React, { Fragment } from 'react'
import {HomePage} from './src'

const Home = props => {
	return (
		<html lang="en">
			<head>
			  <meta charSet="utf-8"/>
			  <title>{props.title}</title>
			  <meta name="description" content={props.description}/>
			  <meta name="author" content={props.author}/>
			  <meta name="viewport" content="width=device-width, initial-scale=1"/>
			  <link rel="shortcut icon" href="/images/icon/logo_puji.png"/>
			  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
			  <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'/>
			  <link rel="stylesheet" type="text/css" href="/css/index.css"/>
			</head>

			<body>
				<HomePage heros={props.hero} landing={props.landing}/>
			</body>
		</html>
	)
}

export default Home