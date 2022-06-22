import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import ProjectCard from './project-card/project-card.component';
import './section-projects.component.css';




export default function SectionProjects(props) {
	const projects = props.projects;
	const state = useContext(ThemeContext)
	
	const section3 = {
		backgroundColor: state.theme.secondary,
		color: state.theme.text
	}

	const slant = {
		borderRightColor: state.theme.slantSecondary,
		borderTopColor: state.theme.slantPrimary
	}
	
	const projectStyle = {
		backgroundColor: state.theme.primary,
		color: state.theme.text,
		boxShadow: state.theme.BoxShadow
	}
	const projectLinks = {
		backgroundColor: state.theme.LinksColorBg,
		color: state.theme.LinksText,
		borderColor: state.theme.LinksColorBorder
	}

	return(
		<div className="section-3" id="projects" style={section3}>
			<div className="section-slant section-title" style={slant}></div>
			{/* <h3 className="section-3-subsection">PROFESSIONAL PROJECTS</h3>
			<div className="projects-professional">	
				{projects.map(project => {
					if(project.professional){									
						return(
						<ProjectCard 
						project={project} 
						key={project.key}
						projectStyle={projectStyle}
						projectLinks={projectLinks}/>
					)} else 
					return null;
				})}
			</div> */}
			<h3 className="section-3-subsection section-title">PROJECTS</h3>
			<div className="projects-hobby">
				{projects.map(project => {
					if(!project.professional){
						return (
						<ProjectCard 
						project={project} 
						key={project.key}
						projectStyle={projectStyle}
						projectLinks={projectLinks}/>
					)} else 
					return null;
				})}
			</div>
		</div>
	)
}