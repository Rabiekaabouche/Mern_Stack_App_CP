import code from "../model/code.js";

export const getCodes = async (req, res) => {
	try {
		const codes = await code.find({});

		res.status(200).json(codes);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
