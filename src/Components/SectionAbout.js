import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import { MotionAnimate } from 'react-motion-animate'



export default function SectionAbout(){
	const state = useContext(ThemeContext)

	const section2 = {
		backgroundColor: state.theme.primary
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
			<img src="./images/myPhoto2.jpg" alt="" className="my-photo" id="myphoto" style={boxShadow}/>
			<div className="about-me-text-container" id="info">
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				ease="circIn" >
				<h2 style={text}>
					Hi! I am Pawel, a proactive and responsible Software Developer.
					Passionate about what I do and always up for a challenge.
					I love problem-solving, and I am excited every time I start a new project.
				</h2>
				</MotionAnimate>
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				delay={0.3}
				ease="circIn" >
				<h2 style={text}>
					My experience is mostly around Angular/Nodejs/SCSS, but I have good understanding of other various technologies.
					You can read more about that in "Skills" section.
				</h2>		
				</MotionAnimate>
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				delay={0.6}
				ease="circIn" >
				<h2 style={text}>
					I am looking for something part-time, that I could work on in the evenings and on weekends.
					Looking forward to hearing from you.
				</h2>
				<div className='contact-me-container'>
					<a className='contact-me-btn' href="#contact" style={textColor}>Contact Me</a>
				</div>
				</MotionAnimate>
			</div>
		</div>
	)
}