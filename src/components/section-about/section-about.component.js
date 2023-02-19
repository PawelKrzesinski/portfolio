import React, { useContext } from 'react';
import { ThemeContext } from '../theme-provider/theme-provider.component';
import './section-about.component.css';
import { MotionAnimate } from 'react-motion-animate';



export default function SectionAbout(){
	const themeState = useContext(ThemeContext)

	const styles = {
		section:{
			backgroundColor: themeState.theme.primary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
		slant:{
			borderRightColor: themeState.theme.primary,
		},
		contactBtn:{
			backgroundColor: themeState.theme.primary,
			color: themeState.theme.quaternary || themeState.theme.tetriary,
			borderColor: themeState.theme.tetriary,
		}
	}

	return (
		<div className='section-2' id='about' style={styles.section}>
			<div className='section-slant' style={styles.slant}></div>
			<h3 id='about-me' className='section-title'>ABOUT ME</h3>
			<div className='section-2-content-container'>
				<MotionAnimate
					animation='fadeInUp'
					reset={true}
					speed={0.5}
					ease='circIn' >
					<h2>
						Hi! I am Pawel, a proactive and responsible Software Developer.
						Passionate about what I do and always up for a challenge.
						I love problem-solving and coming up with new ideas that I turn into code.
					</h2>
				</MotionAnimate>
				<MotionAnimate
					animation='fadeInUp'
					reset={true}
					speed={0.5}
					delay={0.3}
					ease='circIn' >
					<h2>
						I am experienced in various fantastic technologies like Angular 
						and Nodejs/Nestjs or testing environments like Jest or Jasmine.
						Developed in the Frontend as well as in the Backend
					</h2>		
				</MotionAnimate>
				<MotionAnimate
					animation='fadeInUp'
					reset={true}
					speed={0.5}
					delay={0.6}
					ease='circIn' >
					<h2>
          You can read more about my skills and experience in the Skills section.
          If you are looking for a developer, please feel free to contact me.
            <div className='contact-me-container'>
              <a className='contact-me-btn' href='#contact' style={styles.contactBtn}>Contact Me</a>
            </div>
					</h2>
				</MotionAnimate>
			</div>
		</div>
	)
}