import mongoose from "mongoose";

const code = mongoose.Schema({
	codePostal: String,
	codeCommune: String,
	nomCommune: String,
	libelleAcheminement: String,
});

const Code = mongoose.model("Code", code, "test");

export default Code;
