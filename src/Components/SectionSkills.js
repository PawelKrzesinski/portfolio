import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import SkillCard from './SkillCard.js';




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
			<span>SKILLS:</span>
			<div className="section-slant" style={slant}></div>
			<h4>I have experience in many different technologies. Some of them I am using on a daily basis, some of them I have used only for hobby projects. </h4>
			<h4>Those are the technologies I have came across: </h4>
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
















