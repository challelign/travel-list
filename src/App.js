import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import FlashCards from "./components/FlashCards";

function App() {
	const [items, setItems] = useState([]);
	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList items={items} />
			<Stats />
			<br></br>
			<FlashCards />
			<br></br>
		</div>
	);
}

export default App;
