import React from "react";
import "./home.css";
import LinkBtnComponent from "../LinkBtnComponent";

function HomeComponent() {
	return (
		<div className="home" id="home">
			<h1 className="intro">Hey, My name is Isha Jain</h1>
			<div className="intro-text">
				I am a passionate frontend developer based in Gurugram, India. My
				specialities are <strong>React JS</strong>, <strong>JavaScript</strong>{" "}
				and <strong>CSS</strong>, and I love building beautiful and fully
				responsive apps.
			</div>
			<LinkBtnComponent
				text="see my projects"
				bg="white"
				fg="black"
				padding="0.8em 4em"
			/>
			<div className="scroll">
				<div class="mouse"></div>
			</div>
		</div>
	);
}

export default HomeComponent;
