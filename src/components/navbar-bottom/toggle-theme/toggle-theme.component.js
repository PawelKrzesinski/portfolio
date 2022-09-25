import React, { useContext } from 'react'
import { ThemeContext } from '../../theme-provider/theme-provider.component';
import './toggle-theme.component.css';

function ToggleTheme() {
	const state = useContext(ThemeContext)
	return (
    <div className="theme-switch-box">
		  <div className="theme-switch">
			  <input type="checkbox" id="switch" onChange={() => { state.setTheme(state.theme.type) }}/>
			  <label htmlFor="switch"></label>
		  </div>
			<p>Dark/Light</p>
    </div>
	)
}

export default ToggleTheme