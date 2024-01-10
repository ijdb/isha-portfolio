import React from "react";
import LinkBtnComponent from "../LinkBtnComponent";

function ProjectItem() {
	return (
		<div className="project-item-container">
			<div className="project-img">
				<img src="./images/person.avif" alt="quiz-app" />
			</div>
			<div className="project-features">
				<h2>Quiz App</h2>
				<p>
					Quizzical is a simple quiz app that lets you select alternatives and
					then gives you a score. It's built with functional React components.
				</p>
				<LinkBtnComponent text="Learn More" />
			</div>
		</div>
	);
}

export default ProjectItem;
