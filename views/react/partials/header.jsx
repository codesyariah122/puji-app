import React, {Fragment} from 'react'
import Styled from 'styled-components'

const Heading = Styled.h1`
	color: crimson;
`

const Header = () => {
	return (
		<Fragment>
			<Heading>Header Content</Heading>
		</Fragment>
	)
}

export default Header