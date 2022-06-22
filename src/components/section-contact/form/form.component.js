import React from 'react';
import './form.component.css'

const form = (props) =>{
	return (
		<form id="contact-form" onSubmit={props.onSubmit}>
			<div className="form-box" >
				<input
				className="inputFields"
				placeholder=" " 
				type='text' 
				value={props.yourName}
				name='yourName' 
				onChange={props.changed}
				required={true}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="yourName">Your name:</label>
				<span className="animate-input-border"></span>
			</div>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder=" " 
				type='email' 
				value={props.email}
				name='email' 
				onChange={props.changed}
				required={true}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="email">E-mail address:</label>
				<span className="animate-input-border"></span>
			</div>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder=" " 
				type='text' 
				value={props.topic}
				name='topic' 
				onChange={props.changed}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="topic">Topic:</label>
				<span className="animate-input-border"></span>
			</div>
			<div className="form-box">
				<textarea
				className="inputFields"
				placeholder=" " 
				name="comment" 
				value={props.comment}
				form="contact-form" 
				onChange={props.changed}
				required={true}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="comment">Your message:</label>
				<span className="animate-input-border"></span>
			</div>		
		</form>
	)
}

export default form;
