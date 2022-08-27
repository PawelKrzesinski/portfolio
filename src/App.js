import React, { Component } from 'react';
import { ThemeContextProvider } from './components/theme-provider/theme-provider.component';

import './App.css';
import './animations/Animations.css';

import Navbar from './components/navbar/navbar.component';
import SectionAbout from './components/section-about/section-about.component'
import SectionHome from './components/section-home/section-home.component';
import SectionProjects from './components/section-projects/section-projects.component'
import SectionSkills from './components/section-skills/section-skills.component';
import SectionContact from './components/section-contact/section-contact.component'
import Footer from './components/footer/footer.component';
import NavbarBottom from './components/navbar-bottom/navbar-bottom.component';




class App extends Component {
	constructor() {
		super();
		this.state = {
					formData: {
						yourName: "",
						topic: "",
						email: "",
						comment: "",
					},
					projects: [],
					skillsSection: {
						skills:[],
						menuState: "deactivated",
					}
		}
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
			this.setState({...this.state, projects: data.projects})
		})
		fetch('skills.json', {
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			this.setState({...this.state, skillsSection: {...this.state.skillsSection, skills: data.skills }})
		})
	}
	handleChange = e => {
		this.setState({...this.state, [e.target.name]: e.target.value})
	}

	handleSubmit = e => {
		const loading = document.querySelector(".spinner");
		loading.style.display = "block";
		e.preventDefault()
		fetch('https://pawel-krzesinski.co.uk/api/send', {
			method: 'POST',
			body: JSON.stringify(this.state.formData),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		}).then(response => {
			loading.style.display = "none";
			if(!response.ok){
				console.error(response)
				console.log("Message not sent")
				this.setState({...this.state, wasMsgSent: "Something went wrong. Try again or contact me through email at the bottom of the page."})
			} else {
				this.resetForm();
				console.log("Message sent")
				this.setState({...this.state, wasMsgSent: "Message has been sent!"})
			}
		})
	}

	resetForm = () => {
		this.setState({...this.state,
			formData: {
				yourName: "",
				topic: "",
				email: "",
				comment: "",
		},
		})
		Array.from(document.querySelectorAll('.inputFields')).forEach( field => {
			field.value = '';
		})
	}


	
	render() {
		const {wasMsgSent, projects, skillsSection} = this.state;
		return (
			<ThemeContextProvider>
				<div className="App" id="top">
					<Navbar />
					<SectionHome />
					<SectionAbout />
					<SectionProjects 
					projects={projects}/>
					<SectionSkills skillSection={skillsSection}/>
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
