import React from 'react';
import { useState } from "react";
import "../css/initializer.css";

export const Form = ({onSubmit}) => {

  const [maxCount, setMaxCount] = useState(1000);
	const [initialCount, setInitialCount] = useState(1);

  return (
    <form onSubmit={onSubmit}>
    <div id="initializer">
			<div className="initializer-input-wrapper">
				<button
					className="btn"
				>
					Set Initial Count 
				</button>
				<input
					id="initialinput"
					onChange={(e) => setInitialCount(Number(e.target.value))}
					value={initialCount}
					type="number"
					placeholder="Enter initial Count"
				></input>
				
			</div>

			<div className="initializer-input-wrapper">
				<button className="btn" >
					Set Maximum Count
				</button>
				<input
					id="maxvalinput"
					onChange={(e) => setMaxCount(Number(e.target.value))}
					value={maxCount}
					type="number"
					placeholder="Enter maximum Count"
				></input>

				
			</div>
			<button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
		</div>
	</form>
  );
};
export default Form;
