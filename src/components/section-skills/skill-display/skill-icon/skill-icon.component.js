
import React from "react";
import "./skill-icon.component.css"
export default function SkillIcon(props) {
  return(
    <div>
        <img src={props.skill.icon} className="skill-icons"></img>
        <div className="skill-name">{props.skill.skill}</div>
        <div className="skill-score">{props.skill.score}</div>
    </div>
  )

}
