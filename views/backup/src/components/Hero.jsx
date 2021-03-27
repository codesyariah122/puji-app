import React, {Fragment} from 'react'
const Hero = props => {
	return (
	<Fragment>
		<h4 className="hero-heading">
			{props.label}
		</h4>
		<a className="button button-secondary" href={props.buttonUrl}>{props.buttonLabel}
		</a>
	</Fragment>
	)
}

export default Hero