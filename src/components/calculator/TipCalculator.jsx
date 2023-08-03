import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import VatPercentage from "./VatPercentage";

const TipCalculator = () => {
	const [bill, setBill] = useState("");
	const [vat, setVat] = useState("");
	const [percentage1, setPercentage1] = useState(0);
	const [percentage2, setPercentage2] = useState(0);

	const tip = bill * ((percentage1 + percentage2) / 2 / 100);
	const withVat = (bill + tip) * (1 + vat / 100);

	const handleReset = () => {
		setBill("");
		setVat("");
		setPercentage1(0);
		setPercentage2(0);
	};
	return (
		<>
			<footer className="question-title">
				<em>Bill Calculator with vat and no vat</em>
			</footer>
			<div className="calculator">
				<BillInput bill={bill} onSetBill={setBill} />
				<SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
					How did You like the service ?
				</SelectPercentage>
				<SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
					How did Your Friend like the service ?
				</SelectPercentage>
				<VatPercentage vat={vat} onSetVat={setVat} />

				{bill > 0 && (
					<>
						<p>================= Payment Summary =================</p>
						<Output bill={bill} tip={tip} withVat={withVat} />
						<Reset onReset={handleReset} />
						<p>==================== Thank You =====================</p>
					</>
				)}
			</div>
		</>
	);
};

export default TipCalculator;
