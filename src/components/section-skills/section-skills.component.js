import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
// import SkillCard from './skill-card/skill-card.component';
import './section-skills.component.css'
import SkillPicker from './skill-picker/skill-picker.component';
import ReactDOM from "react-dom";



export default function SectionSkills(props) {

	const themeState = useContext(ThemeContext)
	

	

	const styles = {
		section: {
			backgroundColor: themeState.theme.primary,	
			color: themeState.theme.quaternary || themeState.theme.tetriary
		},
		slant: {
			borderRightColor: themeState.theme.primary
		},
		skillCard: {
			backgroundColor: themeState.theme.secondary,
			boxShadow: themeState.theme.boxShadow
		}
	}


	return(
		<div className="section-4" id="skills" style={styles.section}>
			<h3 className='section-title'>SKILLS:</h3>
			<div className="section-slant" style={styles.slant}></div>
			<h4>
				I have experience in many different technologies. I am working with Angular on daily basis and know other frameworks, libraries and programming paradigms (e.g., OOP, FP).
				I can develop mobile applications, responsive websites(including mobile-first approach) and web applications.
			</h4>
			<h4>This is my full skillset in detail: </h4>
			<SkillPicker />
			{/* <div className="skills-gridbox">
			{skills.map(skill => {
				return(
					<SkillCard 
					skill={skill} 
					key={skill.key}
					skillCardStyles={styles.skillCard}/>
				)
			})}
			</div> */}
		</div>
	)
}

ReactDOM.render(<h1>PLERP</h1>
// <SkillPicker />
, document.getElementById('root'))














