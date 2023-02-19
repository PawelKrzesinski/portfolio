
import React from 'react';
import './skill-icon.component.css'
export default function SkillIcon(props) {
  return(
    <div className='skill-item'>
        <img src={props.skill.icon} className='skill-icons'></img>
        <div className='skill-name'>{props.skill.name}</div>
    </div>
  )

}
