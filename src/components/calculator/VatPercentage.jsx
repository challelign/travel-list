import React from "react";

const VatPercentage = ({ vat, onSetVat }) => {
	// the state control found in TipCalculator as parent pros
	return (
		<div>
			<label>How much was the VAT Percentage ?</label>
			<input
				type="text"
				placeholder="VAT Value"
				value={vat}
				onChange={(e) => onSetVat(Number(e.target.value))}
			/>
		</div>
	);
};

export default VatPercentage;
