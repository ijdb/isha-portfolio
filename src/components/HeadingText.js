import React from "react";

function HeadingText({ text, fg }) {
	let styles = { color: fg };
	return (
		<div className="text" style={styles}>
			{text}
		</div>
	);
}

export default HeadingText;
