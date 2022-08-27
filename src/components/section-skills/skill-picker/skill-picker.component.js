import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components';
import './skill-picker.component.css'

export default function SkillPicker(component) {
    // const {menuState, setMenuState} = useState('deactivated')
	console.log(component)
    let iconsArr = Array.from(document.querySelectorAll('.icons'));
    
    function changeMenuState() {
        console.log()
        if(component.state === 'deactivated'){
            component.state.setState({state: 'activated'});
            return expandIcons();
        }
    }
    
    function expandIcons(){
        iconsArr.forEach((icon) => {
        const iconPos = iconsArr.indexOf(icon) + 1;
        const iconsLength = iconsArr.length;
        icon.style.transitionDelay = `calc(0.05s * ${iconPos})`
        return icon.style.transform = `rotate(calc(360deg/${iconsLength} * ${iconPos}))`
        // return icon.style.transform = 'rotate(0deg) translateX(150px)';
      })
    }

    return (
        <div className='skill-picker-content'>
            <div className="plerp">
                <div className={`toggle ${component.state}`} onClick={changeMenuState}>+</div>
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
