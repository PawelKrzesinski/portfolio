import React from 'react';
import { ThemeContextProvider } from './components/theme-provider/theme-provider.component';
import './App.css';
import './animations/Animations.css';
import Navbar from './components/navbar/navbar.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionHome from './components/section-home/section-home.component';
import SectionProjects from './components/section-projects/section-projects.component';
import SectionSkills from './components/section-skills/section-skills.component';
import SectionContact from './components/section-contact/section-contact.component';
import Footer from './components/footer/footer.component';
import NavbarBottom from './components/navbar-bottom/navbar-bottom.component';

export default function App() {
	return (
		<ThemeContextProvider>
			<div className='App' id='top'>
				<Navbar />
				<SectionHome />
				<SectionAbout />
				<SectionProjects />
				<SectionSkills />
				<SectionContact />
				<NavbarBottom />
				<Footer />
			</div>
		</ThemeContextProvider>
	);
}
