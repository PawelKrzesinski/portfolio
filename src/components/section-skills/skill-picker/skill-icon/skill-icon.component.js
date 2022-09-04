
import React from "react";
import "./skill-icon.component.css"
export default function SkillIcon(props) {
  return(
    <div className={props.classes.iconContainer} ref={props.childRef} style={props.rotateContainer}>
        <img src={props.skill.icon} className={props.classes.skillIcon} style={props.rotateIcon}></img>
    </div>
  )
}