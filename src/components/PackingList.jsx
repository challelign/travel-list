import React from "react";
import Item from "./Item";
const initialItems = [
	{ id: 1, description: " Passports", quantity: 2, packed: false },
	{ id: 2, description: " Socks", quantity: 12, packed: true },
	{ id: 3, description: " Jacket", quantity: 3, packed: false },
	{ id: 4, description: " Shoos", quantity: 3, packed: true },
	{ id: 5, description: " T-shert", quantity: 10, packed: false },
	{ id: 6, description: " Charger", quantity: 1, packed: false },
];
const PackingList = () => {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;
