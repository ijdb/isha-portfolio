import React from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import HomeComponent from "./components/home/HomeComponent";
import ProjectComponent from "./components/projects/ProjectComponent";
import AboutComponent from "./components/about/AboutComponent";
import ContactComponent from "./components/contact/ContactComponent";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
	return (
		<div>
			<HeaderComponent />
			<HomeComponent />
			<ProjectComponent />
			<AboutComponent />
			<ContactComponent />
			<FooterComponent />
		</div>
	);
}

export default App;
