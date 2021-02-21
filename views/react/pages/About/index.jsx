import React from 'react'
import Styled from 'styled-components'
import DefaultLayout from '../../../layouts/default'

const Heading = Styled.h1`
	color: crimson;
`
const About = (props) => {
	return (
		<DefaultLayout title={props.title}>

		<Heading>
			{props.header}
		</Heading>

		</DefaultLayout>	
	)
}

export default About