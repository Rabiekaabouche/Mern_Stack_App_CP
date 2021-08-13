import React from "react";

import "./Form.css";

function Form({ handleChange, input }) {
	return (
		<div className="wrapper">
			<div className="formContainer">
				<div className="label">Je recherche...</div>
				<input
					onChange={handleChange}
					className="search"
					type="text"
					placeholder="...une ville, un code postal"
					value={input}
				/>
			</div>
		</div>
	);
}

export default Form;
