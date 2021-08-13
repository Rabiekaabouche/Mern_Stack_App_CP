import React from "react";
import "./DataWrapper.css";
import Item from "./Item/Item";

function DataWrapper({ title, data, allData, input }) {
	return (
		<div className="dataWrapper">
			<p className="title">{title}</p>
			{input ? (
				data.length ? (
					<div className="notif found">
						{data.length} villes on été trouvées
					</div>
				) : (
					<div className="notif not_found">0 villes on été trouvées</div>
				)
			) : null}

			<div className="data">
				{data.map((item) => (
					<Item key={item._id} city={item.nomCommune} codeP={item.codePostal} />
				))}
			</div>
		</div>
	);
}

export default DataWrapper;
