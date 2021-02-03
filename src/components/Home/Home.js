import React from 'react';
import Particles from 'react-particles-js';
import './Home.css';
import {Link} from 'react-scroll';

const ParticlesOptions = {
  particles: {number:{value:100,density:{enale:true,value_area:1000}}}
}



const Home =()=>{
	return(
		<div id='Home' className='Home'>
		<Particles className='Particle' params={ParticlesOptions}/>
			<div className='Name f2 white tc'>
		        <p>Hey, It's <b className='f1 red'>Wajid Malik</b><br />I'm a software engineer.</p>
				<div className="ph3">
					<a 
					className='grow f3 link ba ph3 br2 b pv2 mb2 dib red pointer'>
						<Link to='About' spy={true} smooth={true}>Check My Profile</Link>
					</a>
				</div>
			</div>
		</div>
		);
}
export default Home;