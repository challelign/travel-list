import React from "react";

const Stats = ({ items }) => {
	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);
	if (!items.length || numPacked === 0)
		return (
			<p className="stats">
				<em>
					Start Adding some items to your packing list Or Please Check Your
					packed Items 🚀
				</em>
			</p>
		);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You got Everything Ready to go ✈️"
					: `You have ${numItems} items on Your List , and you already packed
				${numPacked}(${percentage}%)`}
			</em>
		</footer>
	);
};

export default Stats;
