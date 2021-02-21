import React, {Fragment} from 'react'
import {Header, Footer} from '../react/partials'
import Helmet from 'react-helmet'

const DefaultLayout = (props) => {
	return (
		<html>
			<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="stylesheet" type="text/css" href="css/app.css"/>
			<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css"/>
			<link href="bootstrap/css/bootstrap-grid.min.css" rel="stylesheet" />
			<link href="bootstrap/css/bootstrap-reboot.min.css" rel="stylesheet" />	
			<link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@900&family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
				<title>{props.title}</title>
			</head>
			
			<body>

			<Header/>

				{props.children}
			
			<Footer/>


		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
		
		</body>
	</html>
	)
}

export default DefaultLayout