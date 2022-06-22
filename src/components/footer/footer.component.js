import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import './footer.component.css';


export default function Footer(){
	const state = useContext(ThemeContext)

	let copyrights = () => {
		return `Copyright ${new Date().getFullYear()}, Pawel Krzesinski, Exeter, UK`;
	}
	const footer = { 
		backgroundColor: state.theme.primary,
		color: state.theme.text,
		borderColor: state.theme.border
	}

	return(
		<div className="footer" style={	footer }>
			<h5 className="email">krzesinskiwebsites@outlook.com</h5>
			<h6 className='copyrights' id='copyrights'>{copyrights()}</h6>
		</div>
	)
}
