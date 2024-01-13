import React from "react";
import "./contact.css";
import HeadingComponent from "../HeadingComponent";
import HeadingText from "../HeadingText";

function ContactComponent() {
	return (
		<div className="contact-section-container" id="contact">
			<HeadingComponent text="contact" />
			<HeadingText
				fg="white"
				text="Please reach out if you have anyquestions! Send me an email at ishajain.cv@gmail.com. I'm looking forward to hearing from you."
			/>
		</div>
	);
}

export default ContactComponent;
