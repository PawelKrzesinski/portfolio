import React, { useContext } from "react";
import { ThemeContext } from "../theme-provider/theme-provider.component";
import "./navbar.component.css";

export default function Navbar() {
	const themeState = useContext(ThemeContext);
	const styles = {
		component: {
			backgroundColor: themeState.theme.navbar,
		},
		links: {
			color: themeState.theme.quaternary || themeState.theme.tetriary,
		},
	};

	return (
		<div className="navbar" style={styles.component}>
			<a href="./index.html" className="logo" style={styles.links}>
				<span className="logo-part1">P</span>
				<span className="logo-part2">K</span>
			</a>
			<a href="#root" style={styles.links}>HOME</a>
			<a href="#about" style={styles.links}>ABOUT</a>
			<a href="#projects" style={styles.links}>PROJECTS</a>
			<a href="#skills" style={styles.links}>SKILLS</a>
			<a href="#contact" style={styles.links}>CONTACT</a>
		</div>
	);
}
