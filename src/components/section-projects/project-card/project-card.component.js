import React from 'react';
import './project-card.component.css';
const projectCard = (props) => {
	
	return(
		<div className="project-box" style={props.styles.projectCard} key={props.project.key}>
      <div className='project-image-box'>
        <img className="project-image" src={props.project.image} alt=""/>
      </div>
      <div className='project-desc-box' style={props.styles.section}>
        <h4 style={props.styles.borderBottom}>{props.project.title}</h4>
        <p className="project-desc">{props.project.description}</p>
        <div className="project-button-box">
          <a href={props.project.live} 
          style={props.styles.projectLinks}  
          target='_blank' 
          rel='noopener noreferrer'          
          >
            Project live
          </a>
          <a href={props.project.github} 
          style={props.styles.projectLinks}  
          target='_blank' 
          rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>	
      </div>
		</div>
	)
}

export default projectCard;