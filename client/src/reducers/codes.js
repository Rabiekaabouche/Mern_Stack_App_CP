const initialState = {
	globalData: [],
	data: [],
	loading: false,
};

const reducer = (codes = initialState, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...codes, loading: true };

		case "FETCH_ALL":
			return { ...codes, globalData: action.payload, loading: false };

		case "SEARCH":
			if (action.payload === "") return { ...codes, data: [] };
			const filteredData = codes.globalData
				.filter(
					(item) =>
						item.codePostal.includes(action.payload) ||
						item.nomCommune.toLowerCase().includes(action.payload)
				)
				.slice(0, 100);
			return { ...codes, data: filteredData };
		default:
			return codes;
	}
};

export default reducer;
