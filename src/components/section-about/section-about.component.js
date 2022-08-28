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
		text:{
			boxShadow: themeState.theme.boxShadow,
			backgroundColor: themeState.theme.secondary,
		},
		contactBtn:{
			backgroundColor: themeState.theme.primary,
			color: themeState.theme.tetriary,
			borderColor: themeState.theme.tetriary,
		}
	}

	return (
		<div className="section-2" id="about" style={styles.section}>
			<div className="section-slant" style={styles.slant}></div>
			<div className='section-2-content-container'>
				<div>
					<h3 id='about-me' className='section-title'>ABOUT ME</h3>
					<img src="./images/myPhoto2.jpg" alt="" className="my-photo"/>
				</div>
				<div className="about-me-text-container">
					<MotionAnimate
					animation="fadeInUp"
					reset={true}
					speed={0.5}
					ease="circIn" >
					<h2 style={styles.text}>
						Hi! I am Pawel, a proactive and responsible Software Developer.
						Passionate about what I do and always up for a challenge.
						I love problem-solving and coming up with new ideas that I turn into code.
					</h2>
					</MotionAnimate>
					<MotionAnimate
					animation="fadeInUp"
					reset={true}
					speed={0.5}
					delay={0.3}
					ease="circIn" >
					<h2 style={styles.text}>
						I am experienced in various fantastic technologies like Angular 
						and Nodejs/Nestjs or testing environments like Jest or Jasmine.
						You can read more about that in the "Skills" section.
					</h2>		
					</MotionAnimate>
					<MotionAnimate
					animation="fadeInUp"
					reset={true}
					speed={0.5}
					delay={0.6}
					ease="circIn" >
					<h2 style={styles.text}>
						I am available part-time and would love to pick up some extra work.
						If you need a developer, please feel free to contact me.
				<div className='contact-me-container'>
					<a className='contact-me-btn' href="#contact" style={styles.contactBtn}>Contact Me</a>
				</div>
					</h2>
					</MotionAnimate>
				</div>
			</div>
		</div>
	)
}