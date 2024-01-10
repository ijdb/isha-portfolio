import React from "react";
import HeaderLinkComponent from "./HeaderLinkComponent";
import "./header.css";

function HeaderComponent() {
	let headerLinks = ["home", "projects", "about", "contact"];
	return (
		<header>
			<div className="left-head">
				<img className="header-img" src="./images/person2.avif" alt="person" />
				<div className="header-name">ISHA JAIN</div>
			</div>
			<div className="right-head">
				{headerLinks.map((link) => (
					<HeaderLinkComponent text={link} />
				))}
			</div>
		</header>
	);
}

export default HeaderComponent;
