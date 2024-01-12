import React from "react";
import "./about.css";
import HeadingComponent from "../HeadingComponent";
import HeadingText from "../HeadingText";
import LinkBtnComponent from "../LinkBtnComponent";
import SkillsItem from "./SkillsItem";

function AboutComponent() {
	let allSkills = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Git",
		"Figma",
		"ChakraUI",
		"BootStrap",
		"GitHub",
	];
	return (
		<div className="about-section-container">
			<div className="top-about-sec">
				<HeadingComponent text="about me" />
				<HeadingText text="I'm a frontend developer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components." />
			</div>

			<div className="left-about-sec">
				<h2>Get to know me</h2>
				<HeadingText text="My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats." />
				<LinkBtnComponent text="contact" />
			</div>
			<div className="right-about-sec">
				<h2>My Skills</h2>
				<div className="skills-list">
					{allSkills.map((item) => (
						<SkillsItem text={item} key={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutComponent;
