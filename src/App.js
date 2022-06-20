import React, { Component } from 'react';
import { ThemeContextProvider } from './Components/ThemeProvider';

import './App.css';
import './Css/Form.css';
import './Css/SkillCard.css';
import './Css/ProjectCard.css';
import './Css/Animations.css';
import './Css/ThemeSwitch.css'
import './Css/Navbar.css';

import Navbar from './Components/Navbar';
import SectionAbout from './Components/SectionAbout'
import SectionHome from './Components/SectionHome';
import SectionProjects from './Components/SectionProjects'
import SectionSkills from './Components/SectionSkills.js';
import SectionContact from './Components/SectionContact'
import Footer from './Components/Footer';
import NavbarBottom from './Components/NavbarBottom';




class App extends Component {
	state = {
				yourName: "",
				topic: "",
				email: "",
				comment: "",
				projects: [],
				skills:[]
	}
	
	componentDidMount () {
		fetch('projects.json', {
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			this.setState({projects: data.projects})
		})
		fetch('skills.json', {
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			this.setState({skills: data.skills})
		})
	}
	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = e => {
		const loading = document.querySelector(".spinner");
		loading.style.display = "block";
		e.preventDefault()
		fetch('https://pawel-krzesinski.co.uk/api/send', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		}).then(response => {
			loading.style.display = "none";
			if(!response.ok){
				console.error(response)
				console.log("Message not sent")
				this.setState({wasMsgSent: "Something went wrong. Try again or contact me through email at the bottom of the page."})
			} else {
				this.resetForm();
				console.log("Message sent")
				this.setState({wasMsgSent: "Message has been sent!"})
			}
		})
	}

	resetForm = () => {
		this.setState({
			yourName: "",
			topic: "",
			email: "",
			comment: "",
		})
		Array.from(document.querySelectorAll('.inputFields')).forEach( field => {
			field.value = '';
		})
	}


	
	render() {
		const {wasMsgSent} = this.state;
		const {projects} = this.state;
		const {skills} = this.state;
		return (
			<ThemeContextProvider>
				<div className="App" id="top">
					<Navbar />
					<SectionHome />
					<SectionAbout />
					<SectionProjects 
					projects={projects}/>
					<SectionSkills
					skills={skills}/>
					<SectionContact 
					changed={this.handleChange.bind(this)}
					onSubmit={this.handleSubmit.bind(this)}
					wasMsgSent={wasMsgSent}/>
					<NavbarBottom />
					<Footer />
				</div>
			</ThemeContextProvider>	
	  );				
}}

export default App;
