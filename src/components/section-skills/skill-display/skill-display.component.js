import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../theme-provider/theme-provider.component";
import SkillIcon from "./skill-icon/skill-icon.component";
import "./skill-display.component.css";
import { MotionAnimate } from 'react-motion-animate';


export default function SkillDisplay() {
  const initialState = {
    skills: [],
		skillsMenuOpen: false,
	};
	const [state, setState] = useState(initialState);
  
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
				return setState({...state,  skills: data.skills });
      });
	};
  
  const themeState = useContext(ThemeContext)
  const styles = {
    row:{
			backgroundColor: themeState.theme.secondary,	
			color: themeState.theme.quaternary || themeState.theme.tetriary
    }
  }

	useEffect(getSkillsData, []);

  const skills = state.skills;
  const types = ['Frontend', 'Backend', 'Testing', 'Other']

	return (
        <div className="skills-container">
            {types.map((type, index) => {
              return (
                <div className="row" key={index} style={styles.row}>
                  <div className="description">{type}</div>
                  <div className="skill-icons-box" >
                    {skills.map((skill, index) => {
                      return skill.type === type ?
                      (
                        <MotionAnimate delay={0.1 * index} speed={1} key={index}>
                          <SkillIcon skill={skill}/>
                        </MotionAnimate>
                          )
                          : null
                        })}

                  </div>
                </div>
              )
            })}
        </div>

	);
}
