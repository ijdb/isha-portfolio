import React from "react";
import "./contact.css";
import HeadingComponent from "../HeadingComponent";
import HeadingText from "../HeadingText";

function ContactComponent() {
	return (
		<div className="contact-section-container">
			<HeadingComponent text="contact" />
			<HeadingText
				fg="white"
				text="Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at jane@example.com or call me directly at +123456789"
			/>
		</div>
	);
}

export default ContactComponent;
