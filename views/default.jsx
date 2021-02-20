import React from 'react'
import {Header, Footer} from './react/partials'

const Default = ({children}) => {
	return (
		<Fragment>
			<Header/>
				{children}
			<Footer/>
		</Fragment>
	)
}

export default Default