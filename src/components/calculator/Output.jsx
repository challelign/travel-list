import React from "react";

const Output = ({ bill, tip, withVat }) => {
	return (
		<div>
			<h3>
				Payment with out VAT ${bill + tip} ($ {bill} + ${tip} tip)
				<br></br>
				You pay with VAT $ {Number(withVat).toFixed(2)}
			</h3>
		</div>
	);
};

export default Output;
