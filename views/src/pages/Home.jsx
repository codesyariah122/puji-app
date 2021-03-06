import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import Artwork from '../components/Artwork'
import Landing from '../components/Landing'

const HomePage = props => {
	// console.log(props.heros)
	const data = props.heros[0]
	return (
		<Fragment>
		{/*hero content*/}
		<div className="section hero">
		    <div className="container">
		      	<div className="row">
		      		
		      		<div className="one-half column">
						<Hero label={data.label} buttonLabel={data.button.label} buttonUrl={data.button.url}/>
					</div>

					<div className="one-half column phones">
						<Artwork/>
					</div>

				</div>
			</div>
		</div>

		{/*landing content*/}

		 <div class="section values">
		    <div class="container">
				<div class="row">
				<Landing landing={props.landing}/>
		      </div>
		    </div>
		  </div>

		</Fragment>
	)
}

export default HomePage