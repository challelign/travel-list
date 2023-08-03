import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import FlashCards from "./components/FlashCards";
import TipCalculator from "./components/calculator/TipCalculator";
const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Jacket", quantity: 3, packed: false },
	// { id: 4, description: "Shoes", quantity: 3, packed: false },
	// { id: 5, description: "T-Shirts", quantity: 10, packed: false },
	// { id: 6, description: "Charger", quantity: 1, packed: false },
];
function App() {
	const [items, setItems] = useState(initialItems);

	const handleDeleteItem = (id) => {
		console.log(id);
		setItems((items) => items.filter((item) => item.id !== id));
	};
	const handleToggleItem = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};
	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	const handleClearList = (item) => {
		const confirmed = window.confirm(
			"Are You sure You want to delete all items ?"
		);
		if (confirmed) {
			setItems([]);
		}
	};
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
			<br></br>
			<FlashCards />
			<br></br>
			<TipCalculator />
			<br></br> <br></br> <br></br> <br></br>
		</div>
	);
}

export default App;
