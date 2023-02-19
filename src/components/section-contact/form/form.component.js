import React from 'react';
import './form.component.css'

const form = (props) =>{
	return (
		<form id='contact-form' onSubmit={props.onSubmit}>
			<div className='form-box' >
				<input
				className='form-input-fields'
				placeholder=' ' 
				type='text' 
				value={props.name}
				name='name' 
				onChange={props.changed}
				required={true}
				autoComplete='off'
				style={props.styles.inputs}
        ref={props.inputFields.name}
				/>
				<label htmlFor='yourName'>Your name:</label>
				<span className='animate-input-border' style={props.styles.inputBorderAnimation}></span>
			</div>
			<div className='form-box'>
				<input
				className='form-input-fields'
				placeholder=' ' 
				type='email' 
				value={props.email}
				name='email' 
				onChange={props.changed}
				required={true}
				autoComplete='off'
				style={props.styles.inputs}
        ref={props.inputFields.email}
				/>
				<label htmlFor='email'>E-mail address:</label>
				<span className='animate-input-border' style={props.styles.inputBorderAnimation}></span>
			</div>
			<div className='form-box'>
				<input
				className='form-input-fields'
				placeholder=' ' 
				type='text' 
				value={props.subject}
				name='subject' 
				onChange={props.changed}
				autoComplete='off'
				style={props.styles.inputs}
        ref={props.inputFields.subject}
				/>
				<label htmlFor='subject'>Subject:</label>
				<span className='animate-input-border' style={props.styles.inputBorderAnimation}></span>
			</div>
			<div className='form-box'>
				<textarea
				className='form-text-area'
				placeholder=' ' 
				name='message' 
				value={props.message}
				form='contact-form' 
				onChange={props.changed}
				required={true}
				autoComplete='off'
				style={props.styles.inputs}
        ref={props.inputFields.message}
				/>
				<label htmlFor='comment'>Your message:</label>
				<span className='animate-input-border' style={props.styles.inputBorderAnimation}></span>
			</div>		
		</form>
	)
}

export default form;
