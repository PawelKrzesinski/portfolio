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
	const themeState = useContext(ThemeContext)
	
	const styles = {
		section:{
			backgroundColor: themeState.theme.secondary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
		slant:{
			borderRightColor: themeState.theme.secondary,
			borderTopColor: themeState.theme.primary
		},
		inputTextColor:{
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
		submitBtn:{
			color: themeState.theme.quaternary || themeState.theme.tetriary,
			backgroundColor: themeState.theme.primary,
			borderColor: themeState.theme.tetriary
		},
	}

	const handleChange = (e) => {
		setState({...state, [e.target.name]: e.target.value });
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
		})
		response.then((response) => {
			loading.style.display = "none";
			if (!response.ok) {
				console.error(response);
				console.log("Message not sent");
				setState({
					submitResult:
						"Something went wrong. Try again or contact me through email at the bottom of the page.",
				});
			} else {
				resetForm();
				console.log("Message sent");
				setState({ submitResult: "Message has been sent!" });
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
		<div className="section-5" id="contact" style={styles.section}>
			<div className="section-slant" style={styles.slant}></div>
			<h3 className='section-title'>CONTACT ME</h3>
			<Form 
			onSubmit={handleSubmit}
			changed={handleChange}
			method="POST"
			inputTextColor={styles.inputTextColor}
			/>
			<img src={spinner} alt="Loading..." className="spinner"/>
			<button 
				type="submit" 
				id="submit" 
				form="contact-form"
				style={styles.submitBtn}
			>Submit</button>
			<p>{state.submitResult}</p>
		</div>
	)
}