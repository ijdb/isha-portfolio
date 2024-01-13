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
		<div className="about-section-container" id="about">
			<div className="top-about-sec">
				<HeadingComponent text="about me" />
				<HeadingText text="I'm a frontend developer based in Gurugram. I love building apps that solve real-world problems, and that are delightful to use. My specialities include React JS, CSS." />
			</div>

			<div className="left-about-sec">
				<h2>Get to know me</h2>
				<HeadingText text="My background is in finance and compliance. When I'm not coding, I enjoy watching films and swimming as a way to relax and unwind." />
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
