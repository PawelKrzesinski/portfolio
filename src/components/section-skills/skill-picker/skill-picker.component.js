import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import SkillIcon from "./skill-icon/skill-icon.component";
import "./skill-picker.component.css";
// import "../../../global-styles.css"
import classNames from 'classnames';
import { useRef } from "react";


export default function SkillPicker() {
  
  const initialState = {
    skills: [],
		skillsMenuOpen: false,
	};

	const [state, setState] = useState(initialState);
  const skillIcons = useRef([]);

	const getSkillsData = () => {
		fetch("skills.json", {
			headers: {
        "Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return setState({ ...state, skills: data.skills });
			});
	};

	useEffect(getSkillsData, []);


  
	function openMenu() {
    return state.skillsMenuOpen 
    ? classNames('skill-icons-container') 
    : classNames('skill-icons-container', 'inactive')
  }


  
	function changeMenuState() {
		setState({...state, skillsMenuOpen: !state.skillsMenuOpen})
	}

    const skills = state.skills;
    
    const classes = {
      skillIcon: classNames('skill-icons'), 
      iconContainer: openMenu(),
      toggle: classNames(state.skillsMenuOpen ? "toggle" : "toggle toggle-inactive")
    };
	return (
		<div className="skill-picker-content">
			<div className="menu">
				<div className="toggle-pulse-two"></div>
				<div className='toggle-pulse'></div>
				<div className={classes.toggle} onClick={changeMenuState}>{state.skillsMenuOpen}</div>
			    {skills.map((skill, index) => {
				    return( 
              <SkillIcon 
              skill={skill} 
              key={index} 
              classes={classes} 
              childRef={(el) => {skillIcons.current[index] = el}}
              rotateContainer={{ 
                transform:  `rotate(calc(360deg/${skills.length} * ${index + 1}))`,
                transitionDelay: `calc(${0.1 * (index + 1)}s)`}}
              rotateIcon={{ transform:  `rotate(calc(360deg/-${skills.length} * ${index + 1})`}}
              />	
            )
			    })}
			  {/* </div> */}
			</div>
		</div>
	);
}
