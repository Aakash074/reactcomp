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
					onChange={(e) => 	
							e.target.value <= maxCount? setInitialCount(Number(e.target.value)) : alert('Initial Count can not be more than Maximum Value')									
					}
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
					onChange={(e) => 
						e.target.value >= initialCount? setMaxCount(Number(e.target.value)) : alert('Max count can not be less than Initital value')}
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
