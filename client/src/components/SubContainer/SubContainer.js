import React from "react";
import "./SubContainer.css";
import DataWrapper from "./DataWrapper/DataWrapper";
import { useSelector } from "react-redux";

function SubContainer({ input }) {
	const codes = useSelector((state) => state.codes);
	console.log(codes);
	const { data } = codes;

	const metro = data
		.filter((item) => {
			const term = item.codePostal.slice(0, 3);
			return (
				term !== "971" &&
				term !== "972" &&
				term !== "973" &&
				term !== "974" &&
				term !== "976"
			);
		})
		.sort(function (a, b) {
			return a.nomCommune.localeCompare(b.nomCommune);
		});

	const outre = data
		.filter((item) => {
			const term = item.codePostal.slice(0, 3);
			return (
				term === "971" ||
				term === "972" ||
				term === "973" ||
				term === "974" ||
				term === "976"
			);
		})
		.sort(function (a, b) {
			return a.nomCommune.localeCompare(b.nomCommune);
		});

	console.log("metropole", metro);
	console.log("outre", outre);
	return (
		<div className="subContainer">
			<DataWrapper
				title="Villes de métropole"
				data={metro}
				allData={data}
				input={input}
			/>
			<DataWrapper
				title="Villes d'outre mer"
				data={outre}
				allData={data}
				input={input}
			/>
		</div>
	);
}

export default SubContainer;
