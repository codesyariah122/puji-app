import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import Artwork from '../components/Artwork'
import ArtworkLanding from '../components/ArtworkLanding'
import Landing from '../components/Landing'

const HomePage = props => {
	// console.log(props.heros)
	const data = props.heros[0]
	return (
		<Fragment>
		{/*hero content*/}
		<div classNameName="section hero">
		    <div classNameName="container">
		      	<div classNameName="row">
		      		
		      		<div classNameName="one-half column">
						<Hero label={data.label} buttonLabel={data.button.label} buttonUrl={data.button.url}/>
					</div>

					<div classNameName="one-half column phones">
						<Artwork/>
					</div>

				</div>
			</div>
		</div>

		{/*landing content*/}
		 
		 <div className="parallax">
		 </div>
		 <div classNameName="section values">
		 

		    <div classNameName="container">
				<div classNameName="row">
				<Landing landing={props.landing}/>

					<div classNameName="one-half column phones">
						<ArtworkLanding id="artwork-landing"/>
					</div>
		      </div>
		    </div>
		  </div>

		</Fragment>
	)
}

export default HomePage