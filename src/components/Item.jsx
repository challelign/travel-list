import React from "react";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				checked={item.packed}
				onChange={() => {
					onToggleItem(item.id);
				}}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} <span></span>
				{item.description}
			</span>
			{/* this is not working b/c  check readme-cha  */}
			{/* <button onClick={onDeleteItem(item.id)}>❌</button> */}

			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default Item;
