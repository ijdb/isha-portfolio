import React from "react";

function HeaderLinkCpmponent({ text, id }) {
	return (
		<a href={`#${id}`} className="header-link">
			{text}
		</a>
	);
}

export default HeaderLinkCpmponent;
