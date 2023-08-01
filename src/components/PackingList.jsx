import React from "react";
import Item from "./Item";
const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
	{ id: 3, description: "Jacket", quantity: 3, packed: false },
	{ id: 4, description: "Shoes", quantity: 3, packed: true },
	{ id: 5, description: "T-Shirts", quantity: 10, packed: false },
	{ id: 6, description: "Charger", quantity: 1, packed: false },
];
const PackingList = ({ items }) => {
	return (
		<div className="list">
			<ul>
				{/* default render Item List */}
				{initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))}
				{items.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;
