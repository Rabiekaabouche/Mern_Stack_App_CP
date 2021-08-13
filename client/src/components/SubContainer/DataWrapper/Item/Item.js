import React from "react";
import "./Item.css";
function Item({ city, codeP }) {
	return (
		<div className="itemWrapper">
			<div className="city">{city}</div>
			<div className="codeP">{codeP}</div>
		</div>
	);
}

export default Item;
