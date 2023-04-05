import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
import Form from './form/form.component';
import './section-contact.component.css';

export default function SectionContact(props) {
	const [form, setForm] = useState({
		name: '',
		subject: '',
		email: '',
		message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
	const themeState = useContext(ThemeContext)
  const spinner = isLoading ? <img src={require('../../images/Spinner-react-biggest.gif')} alt='Loading image' className='spinner'/> : null;
  const inputFields =  {
    name: useRef(),
    email: useRef(),
    subject: useRef(),
    message: useRef(),
  }
	const styles = {
		section:{
			backgroundColor: themeState.theme.secondary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
		slant:{
			borderRightColor: themeState.theme.secondary,
			borderTopColor: themeState.theme.primary
		},
		submitBtn:{
      color: themeState.theme.quaternary || themeState.theme.tetriary,
			backgroundColor: themeState.theme.primary,
			borderColor: themeState.theme.tetriary
		},
    inputs:{
      color: themeState.theme.quaternary || themeState.theme.tetriary,
      borderColor: themeState.theme.inputBorder
    },
    inputBorderAnimation: {
      borderColor: themeState.theme.tetriary,
    }
	}

	const handleInputChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value });
	};

  useEffect(() => {
    if(!isSubmitted) return;
    const handleSubmit = async () => {
      setIsLoading(true);
      const timeout = 1000
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout)
      try{
        await fetch('https://pawel-krzesinski.co.uk/api/send', {
          timeout: timeout,
          signal: controller.signal,
          method: 'POST',
          body: JSON.stringify(form),
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
          })
          clearTimeout(id);
          setResponse('Message has been sent!')
          resetForm();
        } catch (err) {
          setResponse('Something went wrong. Try again or contact me contact@pawel-krzesinski.co.uk')
          console.log('Message not sent');
          console.error(err);
        }
        setIsSubmitted(false);
        setIsLoading(false);
    };
    handleSubmit();
  }, [isSubmitted, form])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
  }
	const resetForm = () => {
    inputFields.email.current.value = '';
    inputFields.message.current.value = '';
    inputFields.name.current.value = '';
    inputFields.subject.current.value = '';
	};

	return(
		<div className='section-5' id='contact' style={styles.section}>
			<div className='section-slant' style={styles.slant}></div>
			<h3 className='section-title'>CONTACT ME</h3>
			<Form 
			onSubmit={handleSubmit}
			changed={handleInputChange}
			method='POST'
      inputFields={inputFields}
			styles={styles}
			/>
			<button 
				type='submit' 
				id='submit' 
				form='contact-form'
				style={styles.submitBtn}
			>Submit</button>
      {spinner}
			<p>{response}</p>
		</div>
	)
}