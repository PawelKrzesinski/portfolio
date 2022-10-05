import React, {useContext} from 'react';
import {ThemeContext} from '../theme-provider/theme-provider.component'
import ToggleTheme from './toggle-theme/toggle-theme.component'
import './navbar-bottom.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
				<a href="https://www.linkedin.com/in/pawel-krzesinski-7a4a581a1/" target="_blank" rel="noopener noreferrer"  style={styles.component}>
          <FontAwesomeIcon icon={faLinkedin} className="navbar-bottom-icons"/>
				</a>
				<a href="https://github.com/PawelKrzesinski" target="_blank" rel="noopener noreferrer"  style={styles.component}>
          <FontAwesomeIcon icon={faGithub} className="navbar-bottom-icons"/>
				</a>
				<ToggleTheme />
	</div>
	)
}

export default NavbarBottom;