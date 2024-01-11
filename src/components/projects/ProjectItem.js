import React from "react";
import LinkBtnComponent from "../LinkBtnComponent";

function ProjectItem({ appTitle, appAbout }) {
	return (
		<div className="project-item-container">
			<div className="project-img">
				<img src="./images/person.avif" alt="quiz-app" />
			</div>
			<div className="project-features">
				<h2>{appTitle}</h2>
				<p>{appAbout}</p>
				<LinkBtnComponent text="Learn More" />
			</div>
		</div>
	);
}

export default ProjectItem;
