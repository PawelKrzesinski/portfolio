import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import './navbar.component.css';

export default function Navbar(){
	const state = useContext(ThemeContext)

	const navbar = {
		backgroundColor: state.theme.navbar,	
	}
	const navbarLink = {
		color: state.theme.text,
		borderColor: state.theme.border
	}
	
	return (
		<div className="navbar" style={navbar}>
			<a href="./index.html" className="logo" style={navbarLink}>
				<span className='logo-part1'>P</span>
				<span className='logo-part2'>K</span>
			</a>
			<a href="#root" style={navbarLink}>HOME</a>
			<a href="#about" style={navbarLink}>ABOUT</a>
			<a href="#projects" style={navbarLink}>PROJECTS</a>
			<a href="#skills" style={navbarLink}>SKILLS</a>
			<a href="#contact" style={navbarLink}>CONTACT</a>
		</div>
	)
}


