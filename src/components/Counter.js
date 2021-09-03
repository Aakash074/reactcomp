import { useState, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ maxCount, initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		setCount(initialCount);
	}, [initialCount]);

	const handleincrement = () => {
		if (count < maxCount) {
			setCount(count + 1);
		}
		else {
			setCount(maxCount);
		}
	};

	const handledecrement = () => {
		if (count <= maxCount) {
			setCount(count - 1);
		}
		else {
			setCount(maxCount);
		}
	};

	return (
		<div id="counter">
			<button
				id="decrement-btn"
				className="btn"
				title="Decrement"
				onClick={handledecrement}
			>
				-
			</button>

			<input
				title="Counter Count"
				id="counter-val"
				value={count}
				max={maxCount}
				onChange={(e) => 
					Number(e.target.value) <= maxCount ? setCount(Number(e.target.value)) : setCount(maxCount)
				}
			></input>

			<button
				id="increment-btn"
				className="btncomp"
				title="Increment"
				onClick={handleincrement}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
