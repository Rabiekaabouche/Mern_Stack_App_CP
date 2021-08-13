import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import code from "./model/code.js";
import codeRouter from "./routes/code.js";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", codeRouter);

const CONNECTION_URL =
	"mongodb+srv://rabiekaabouche:hibasaadrabie@cluster0.ruwtz.mongodb.net/code-postaux?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(
		app.listen(PORT, () => {
			console.log(`server running on port: ${PORT}`);
		})
	)
	.catch((err) => {
		console.log(err.message);
	});
mongoose.set("useFindAndModify", false);
