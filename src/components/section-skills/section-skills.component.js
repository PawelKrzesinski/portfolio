import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
import './section-skills.component.css'
import SkillDisplay from './skill-display/skill-display.component.js';

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
		},
    text: {
      backgroundColor: themeState.theme.secondary,
    }
	}

	return(
		<div className='section-4' id='skills' style={styles.section}>
			<h3 className='section-title'>SKILLS</h3>
			<div className='section-slant' style={styles.slant}></div>
			<h4 style={styles.text}>
        Currently, I am evolving a SaaS product, working with Angular and PrimeNG for the Frontend and NestJS for the Backend.
        I have worked with other frameworks, libraries, mastered various programming paradigms like OOP, FP and created or updated many REST APIs. <br></br><br></br>
				I know how to develop mobile applications, responsive websites(including a mobile-first approach) and web applications.
			</h4>
			<SkillDisplay />
	
		</div>
	)
}












