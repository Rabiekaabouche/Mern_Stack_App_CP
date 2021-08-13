import * as api from "../api";

export const getCodes = () => async (dispatch) => {
	dispatch({ type: "LOADING" });
	const { data } = await api.fetchCodes();
	try {
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const search = (keyword) => {
	return {
		type: "SEARCH",
		payload: keyword.toLowerCase(),
	};
};
