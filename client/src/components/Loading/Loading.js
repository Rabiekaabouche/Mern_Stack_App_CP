import React from "react";
import "./Loading.css";

function Loading() {
	return (
		<div className="loading_container">
			<h1>Please wait until loading application...</h1>
			<div className="lds-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loading;
