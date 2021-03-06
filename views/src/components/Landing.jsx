import React, {Fragment} from 'react'

const Landing = props => {
	const landings = props.landing
	// console.log(landings)

	return (
		landings.map(data => (
			<Fragment>
					<div className="one-third column value">
					    <h2 className="value-multiplier">{data.label}</h2>
					    <h5 className="value-heading">{data.slogan}</h5>
					    <p className="value-description">{data.content}</p>
					    <a href={data.url} className="button muted-button">Go Link</a>
					</div>
			</Fragment>
		))
	)

}

export default Landing