import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCodes } from "./actions/codes";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import SubContainer from "./components/SubContainer/SubContainer";
import { search } from "./actions/codes";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCodes());
	}, [dispatch]);

	const [input, setInput] = useState("");
	useEffect(() => {
		console.log(input);
		dispatch(search(input));
	}, [input, dispatch]);
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<Container>
			<Form handleChange={handleChange} input={input} />
			<SubContainer input={input} />
		</Container>
	);
}

export default App;
