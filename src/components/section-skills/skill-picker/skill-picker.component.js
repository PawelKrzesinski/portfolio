import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components';
import './skill-picker.component.css'

export default function SkillPicker() {
    let iconsArr = Array.from(document.querySelectorAll('.skill-icons'));


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
				 return setState({...state, skills: data.skills });
			});
	};

	useEffect(getSkillsData, [])
    
    function changeMenuState() {
        if(!state.skillsMenuOpen){
            setState({...state, skillsMenuOpen: true });
            return openMenu();
        }
        setState({...state, skillsMenuOpen: false });
        return closeMenu()
    }
    
    function openMenu() {
        iconsArr.forEach((icon) => {
        const iconPos = iconsArr.indexOf(icon) + 1;
        const iconsLength = iconsArr.length;
        icon.style.transitionDelay = `calc(0.05s * ${iconPos})`
        return icon.style.transform = `rotate(calc(360deg/${iconsLength} * ${iconPos}))`
    })
}

function closeMenu() {
    iconsArr.forEach((icon) => {
        return icon.style.transform = 'rotate(0deg) translateX(150px)';
        })
    }


    return (
        <div className='skill-picker-content'>
            <div className="plerp">
                <div className="toggle" onClick={changeMenuState}>+</div>
                <div className="skill-icons">1</div>
                <div className="skill-icons">2</div>
                <div className="skill-icons">3</div>
                <div className="skill-icons">4</div>
                <div className="skill-icons">5</div>
                <div className="skill-icons">6</div>
                <div className="skill-icons">7</div>
            </div>
        </div>
    )
    
}
