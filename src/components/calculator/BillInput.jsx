import React from "react";

const BillInput = ({ bill, onSetBill }) => {
	return (
		<div>
			<label>How much was the bill ?</label>
			<input
				type="text"
				placeholder="bill value"
				value={bill}
				onChange={(e) => onSetBill(Number(e.target.value))}
			/>
			<br></br>
		</div>
	);
};

export default BillInput;
