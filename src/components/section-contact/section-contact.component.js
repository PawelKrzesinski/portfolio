import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
import Form from './form/form.component';
import spinner from '../../images/Spinner-react-biggest.gif';
import './section-contact.component.css';

export default function SectionContact(props) {
	
	const state = useContext(ThemeContext)
	
	const section5 = {
		backgroundColor: state.theme.secondary,
		color: state.theme.text
	}

	const slant = {
		borderRightColor: state.theme.slantSecondary,
		borderTopColor: state.theme.slantPrimary
	}
	const inputTextColor = {
		color: state.theme.LinksText
	}
	const formBtnStyle = {
		color: state.theme.text,
		backgroundColor: state.theme.primary,
		borderColor: state.theme.LinksText
	}
	
	return(
		<div className="section-5" id="contact" style={section5}>
			<div className="section-slant" style={slant}></div>
			<h3 className='section-title'>CONTACT ME</h3>
			<Form 
			onSubmit={props.onSubmit}
			changed={props.changed}
			method="POST"
			inputTextColor={inputTextColor}
			/>
			<img src={spinner} alt="Loading..." className="spinner"/>
			<button 
				type="submit" 
				id="submit" 
				form="contact-form"
				style={formBtnStyle}
			>Submit</button>
			<p>{props.wasMsgSent}</p>
		</div>
	)
}