import React from "react";

function LinkBtnComponent({ text, bg, fg, padding }) {
	let styles = { backgroundColor: bg, color: fg, padding: padding };
	return (
		<div className="btn link-btn" style={styles}>
			{text}
		</div>
	);
}

export default LinkBtnComponent;
