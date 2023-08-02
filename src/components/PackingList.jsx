import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						key={item.id}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default PackingList;
