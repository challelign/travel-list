import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
	const [sortBy, setSortBy] = useState("packed");

	const numItems = items.length;
	let sortedItems;
	if (sortBy === "input") {
		sortedItems = items;
	}

	if (sortBy === "description") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}
	if (sortBy === "packed") {
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}
	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						key={item.id}
						onToggleItem={onToggleItem}
						onClearList={onClearList}
					/>
				))}
			</ul>

			{numItems > 0 ? (
				<div className="action">
					<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
						<option value="input">Sort by input order </option>
						<option value="description">Sort by description</option>
						<option value="packed">Sort by packed status </option>
					</select>

					<button onClick={onClearList}> Clear List</button>
				</div>
			) : null}
		</div>
	);
};

export default PackingList;
