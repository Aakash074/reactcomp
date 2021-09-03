import React from 'react';
import { useState } from "react";
import "../css/initializer.css";

export const Form = ({onSubmit, closeModal}) => {

  const [maxCount, setMaxCount] = useState(1000);
	const [initialCount, setInitialCount] = useState(1);

  return (
    <form onSubmit={onSubmit}>
    <div id="initializer">
			<div className="initializer-input-wrapper">
				<input
					id="initialinput"
					onChange={(e) => setInitialCount(Number(e.target.value))}
					value={initialCount}
					type="number"
					placeholder="Enter initial Count"
				></input>
				<button
					className="btn"
				>
					Set Initial Count 
				</button>
				
			</div>

			<div className="initializer-input-wrapper">
				<input
					id="maxvalinput"
					onChange={(e) => setMaxCount(Number(e.target.value))}
					value={maxCount}
					type="number"
					placeholder="Enter maximum Count"
				></input>
				<button className="btn" >
					Set Maximum Count
				</button>
			</div> 
			<br></br>
			<center>
				<button className = "btn" onClick={closeModal}> Skip </button> 
			</center>
		</div>
	</form>
  );
};
export default Form;
