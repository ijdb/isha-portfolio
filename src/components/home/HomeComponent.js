import React from "react";
import "./home.css";
import LinkBtnComponent from "../LinkBtnComponent";

function HomeComponent() {
	return (
		<div className="home">
			<h1 className="intro">Hey, My name is Isha Jain</h1>
			<div className="intro-text">
				I am a passionate frontend developer based in Gurugram, India. My
				specialities are <strong>React JS</strong>, <strong>JavaScript</strong>{" "}
				and <strong>CSS</strong>, and I love building apps that are delightful
				to use.
			</div>
			<LinkBtnComponent
				text="see my projects"
				bg="white"
				fg="black"
				padding="0.8em 4em"
			/>
		</div>
	);
}

export default HomeComponent;
