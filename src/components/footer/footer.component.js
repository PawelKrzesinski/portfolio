import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import './footer.component.css';


export default function Footer(){
	const themeState = useContext(ThemeContext)

	let copyrights = () => {
		return `Copyright 2020-${new Date().getFullYear()}, Pawel Krzesinski, Exeter, UK`;
	}
	const styles= {
		footer: { 
			backgroundColor: themeState.theme.primary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
			borderColor: themeState.theme.border
		}
	} 

	return(
		<div className="footer" style={	styles.footer }>
			<h5 className="email">krzesinskiwebsites@outlook.com</h5>
			<h6 className='copyrights' id='copyrights'>{copyrights()}</h6>
		</div>
	)
}
