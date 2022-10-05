import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import ProjectCard from './project-card/project-card.component';
import './section-projects.component.css';




export default function SectionProjects() {


	const initialState = {
		projects: [],
	};
	const [state, setState] = useState(initialState);
	
	const projects = state.projects;
	const themeState = useContext(ThemeContext)
	

	const styles = {
		section: {
			backgroundColor: themeState.theme.secondary,
			color: themeState.theme.quaternary || themeState.theme.tetriary
		},
		slant: {
			borderRightColor: themeState.theme.secondary,
		},
		projectCard: {
			backgroundColor: themeState.theme.primary,
			boxShadow: themeState.theme.boxShadow
		},
		projectLinks: {
			backgroundColor: themeState.theme.secondary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
    borderBottom: {
      borderBottomColor: themeState.theme.tetriary,
    },
		
	}
	const getProjectsData = () => {
		fetch("projects.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return setState({...state, projects: data.projects });
			});
	};

	useEffect(getProjectsData, [])

	return(
		<div className="section-3" id="projects" style={styles.section}>
			<div className="section-slant section-title" style={styles.slant}></div>
			<h3 className="section-3-subsection section-title">PROJECTS</h3>
			<div className="projects">
				{projects.map(project => {
					if(!project.professional){
						return (
						<ProjectCard 
						project={project} 
						key={project.key}
						styles={styles}						
            />
					)} else 
					return null;
				})}
			</div>
		</div>
	)
}