import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import { MotionAnimate } from 'react-motion-animate'



export default function SectionAbout(){
	const state = useContext(ThemeContext)

	const section2 = {
		backgroundColor: state.theme.primary,
		color: state.theme.text
	}
	const slant = {
		borderRightColor: state.theme.slantPrimary
	}
	const text = {
		color: state.theme.text,
		textShadow: state.theme.textShadow,
		boxShadow: state.theme.BoxShadow,
		backgroundColor: state.theme.secondary
	}
	const boxShadow = {
		boxShadow: state.theme.BoxShadow
	}
	const textColor = {
		color: state.theme.text
	}
	return (
		<div className="section-2" id="about" style={section2}>
			<div className="section-slant" style={slant}></div>
			<h3 id='about-me'>ABOUT ME</h3>
			<div className='section-2-content-container'>
				<img src="./images/myPhoto2.jpg" alt="" className="my-photo" style={boxShadow}/>
				<div className="about-me-text-container">
					<MotionAnimate
					animation="fadeInUp"
					reset={true}
					speed={0.5}
					ease="circIn" >
					<h2 style={text}>
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
					<h2 style={text}>
						I am experienced in various technologies like Angular or Nodejs/Nestjs
						or testing environments like Jest or Jasmine.
						You can read more about that in the "Skills" section.
					</h2>		
					</MotionAnimate>
					<MotionAnimate
					animation="fadeInUp"
					reset={true}
					speed={0.5}
					delay={0.6}
					ease="circIn" >
					<h2 style={text}>
						I am available part-time and would love to pick up some extra work.
						If you need a developer, please feel free to contact me.
				<div className='contact-me-container'>
					<a className='contact-me-btn' href="#contact" style={textColor}>Contact Me</a>
				</div>
					</h2>
					</MotionAnimate>
				</div>
			</div>
		</div>
	)
}