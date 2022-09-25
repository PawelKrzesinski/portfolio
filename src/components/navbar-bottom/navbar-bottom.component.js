import React, {useContext} from 'react';
import {ThemeContext} from '../theme-provider/theme-provider.component'
import ToggleTheme from './toggle-theme/toggle-theme.component'
import './navbar-bottom.component.css';

function NavbarBottom(){
	const themeState = useContext(ThemeContext)
	const styles = {
		component: {
			backgroundColor: themeState.theme.primary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
      borderColor: themeState.theme.tetriary,
		}
	}

	return (
			<div className="navbar-bottom-icons-box" style={styles.component}>
				<a href="https://www.linkedin.com/in/pawel-krzesinski-7a4a581a1/" className="social-media-link" target="_blank" rel="noopener noreferrer" >
					<img src="https://img.icons8.com/nolan/64/linkedin.png" className="navbar-bottom-icons" alt="linkedin icon"/>
				</a>
				<a href="https://github.com/PawelKrzesinski" className="social-media-link" target="_blank" rel="noopener noreferrer" >
					<img src="https://img.icons8.com/nolan/64/github.png" className="navbar-bottom-icons" alt="github icon"/>
				</a>
				<ToggleTheme />
	</div>
	)
}

export default NavbarBottom;