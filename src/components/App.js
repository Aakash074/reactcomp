import { useState } from "react";
import "../css/app.css";
import Counter from "./Counter";
import { Container } from './Container';

function App() {
	const [maxCount, setMaxCount] = useState(1000);
	const [initialCount, setInitialCount] = useState(1);

	const triggerText = 'Initial Values';

	const onSubmit = (event) => {
		event.preventDefault(event);
		setInitialCount(Number(event.target.initialinput.value));
		setMaxCount(Number(event.target.maxvalinput.value));
	  };

	return (
		<main>
			<h1>Counter Component</h1>
			

			<Counter maxCount={maxCount} initialCount={initialCount} />

			<Container triggerText={triggerText} onSubmit={onSubmit}/>

		</main>
	);
}

export default App;
