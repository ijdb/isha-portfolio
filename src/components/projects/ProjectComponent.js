import React from "react";
import HeadingComponent from "../HeadingComponent";
import "./project.css";
import ProjectItem from "./ProjectItem";

function ProjectComponent() {
	return (
		<div>
			<div className="project-com-top">
				<HeadingComponent text="Projects" />
				<div className="project-text">
					All my projects include links to the code and live version. Click the
					button to learn more about each one.
				</div>
			</div>
			<ProjectItem />
		</div>
	);
}

export default ProjectComponent;
