import React from 'react';


const form = (props) =>{
	return (
		<form id="contact-form" onSubmit={props.onSubmit}>
			<div className="form-box" >
				<input
				className="inputFields"
				placeholder=" " 
				type='text' 
				value={props.fullName}
				name='fullName' 
				onChange={props.changed}
				required={true}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="fullName">Full name:</label>
				<span className="animateInputBorder"></span>
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
				<label htmlFor="email" required>E-mail address:</label>
				<span className="animateInputBorder"></span>
			</div>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder=" " 
				type='text' 
				value={props.companyName}
				name='companyName' 
				onChange={props.changed}
				autoComplete="off"
				style={props.inputTextColor}
				/>
				<label htmlFor="companyName" required>Company Name:</label>
				<span className="animateInputBorder"></span>
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
				<span className="animateInputBorder"></span>
			</div>		
		</form>
	)
}

export default form;
