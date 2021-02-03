import React from 'react';
import './Navigation.css';
import {Link} from 'react-scroll';
const Navigation =()=>{
	const DivProp = 'navBarInside f4 fw4  no-underline dn dib-ns pv2 ph3';
	return(
		<div className='navBar pointer'>
			<div className={DivProp}>
				<Link activeClass='active' to='Home' spy={true} smooth={true}>HOME</Link>
			</div>

			<div className={DivProp}>
				<Link to='About' spy={true} smooth={true}>ABOUT</Link>
			</div>

			<div className={DivProp}>
				<Link to='Projects' spy={true} smooth={true}>PROJECT</Link>
			</div>

			<div className={DivProp}>
				<Link to='Contact' spy={true} smooth={true}>CONTACT</Link>
			</div>
		</div>
		);
}
export default Navigation;