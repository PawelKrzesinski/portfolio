import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component'
import SkillCard from './skill-card/skill-card.component';
import './section-skills.component.css'


export default function SectionSkills(props) {

	const state = useContext(ThemeContext)
	
	const section4 = {
		backgroundColor: state.theme.primary,	
		color: state.theme.text
	}

	const slant = {
		borderRightColor: state.theme.slantPrimary
	}

	const skillCardStyles = {
		backgroundColor: state.theme.secondary,
		boxShadow: state.theme.BoxShadow
	}


	const skills = props.skills;

	return(
		<div className="section-4" id="skills" style={section4}>
			<h3 className='section-title'>SKILLS:</h3>
			<div className="section-slant" style={slant}></div>
			<h4>
				I have experience in many different technologies. I am working with Angular on daily basis and know other frameworks, libraries and programming paradigms (e.g., OOP, FP).
				I can develop mobile applications, responsive websites(including mobile-first approach) and web applications.
			</h4>
			<h4>This is my full skillset in detail: </h4>
			<div className="skills-gridbox">
			{skills.map(skill => {
				return(
					<SkillCard 
					skill={skill} 
					key={skill.key}
					skillCardStyles={skillCardStyles}/>
				)
			})}
			</div>
		</div>
	)
}
















