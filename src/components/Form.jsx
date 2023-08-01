import React, { useState } from "react";

const Form = () => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(5);
	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log(e);

		if (!description || description.trim() === "") return;
		const newItem = {
			description,
			quantity,
			package: false,
			id: Date.now(),
		};
		console.log(newItem);

		setDescription("");
		setQuantity(5);
	};
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😂 trip ?</h3>
			<select
				value={quantity}
				onChange={(e) => {
					console.log(e.target.value);
					setQuantity(Number(e.target.value));
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				value={description}
				onChange={(e) => {
					console.log(e.target.value);
					setDescription(e.target.value);
				}}
				placeholder="Items ..."
			></input>
			<button>Add</button>
		</form>
	);
};

export default Form;
