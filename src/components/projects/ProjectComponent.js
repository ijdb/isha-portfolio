import React from "react";
import HeadingComponent from "../HeadingComponent";
import "./project.css";
import ProjectItem from "./ProjectItem";
import HeadingText from "../HeadingText";

function ProjectComponent() {
	const project1 = {
		title: "Quiz App",
		about:
			"Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components.",
	};
	const project2 = {
		title: "Password Generator",
		about:
			"An app that generates random passwords based on a few user inputs,e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.",
	};
	return (
		<div>
			<div className="project-com-top">
				<HeadingComponent text="Projects" />
				<HeadingText
					text="All my projects include links to the code and live version. Click the
					button to learn more about each one."
				/>
			</div>
			<ProjectItem appTitle={project1.title} appAbout={project1.about} />
			<ProjectItem appTitle={project2.title} appAbout={project2.about} />
		</div>
	);
}

export default ProjectComponent;
