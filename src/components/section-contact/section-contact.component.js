import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
import Form from './form/form.component';
import spinner from '../../images/Spinner-react-biggest.gif';
import './section-contact.component.css';

export default function SectionContact(props) {
	const initialState = {
		yourName: "",
		topic: "",
		email: "",
		comment: "",
		submitResult: "",
	};
	const [state, setState] = useState(initialState);
	const themeSwitch = useContext(ThemeContext)
	
	const section5 = {
		backgroundColor: themeSwitch.theme.secondary,
		color: themeSwitch.theme.text
	}

	const slant = {
		borderRightColor: themeSwitch.theme.slantSecondary,
		borderTopColor: themeSwitch.theme.slantPrimary
	}
	const inputTextColor = {
		color: themeSwitch.theme.LinksText
	}
	const formBtnStyle = {
		color: themeSwitch.theme.text,
		backgroundColor: themeSwitch.theme.primary,
		borderColor: themeSwitch.theme.LinksText
	}

	const handleChange = (e) => {
		setState({ [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		const loading = document.querySelector(".spinner");
		loading.style.display = "block";
		e.preventDefault();
		const response = await fetch("https://pawel-krzesinski.co.uk/api/send", {
			method: "POST",
			body: JSON.stringify(state),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		}).then((response) => {
			loading.style.display = "none";
			if (!response.ok) {
				console.error(response);
				console.log("Message not sent");
				setState({
					wasMsgSent:
						"Something went wrong. Try again or contact me through email at the bottom of the page.",
				});
			} else {
				resetForm();
				console.log("Message sent");
				setState({ wasMsgSent: "Message has been sent!" });
			}
		});
	};

	const resetForm = () => {
		setState({
			yourName: "",
			topic: "",
			email: "",
			comment: "",
		});
		Array.from(document.querySelectorAll(".inputFields")).forEach((field) => {
			field.value = "";
		});
	};
	
	return(
		<div className="section-5" id="contact" style={section5}>
			<div className="section-slant" style={slant}></div>
			<h3 className='section-title'>CONTACT ME</h3>
			<Form 
			onSubmit={handleSubmit}
			changed={handleChange}
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
			<p>{state.wasMsgSent}</p>
		</div>
	)
}