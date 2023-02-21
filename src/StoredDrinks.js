import React, { useState } from "react";
import Drink from "./Drink";

export default function StoredDrinks() {
	const [storage, setStorage] = useState(localStorage.drinks);

	function loadDrinks() {
		//hämtar drinkar från localstorage
		let drinks = localStorage.drinks;
		let newDrinkList;

		//om 'drinks' är undefined sparas newDrinkslist som en tom lista, annars sparas localstorage i newDrinkslist
		drinks === undefined
			? (newDrinkList = [])
			: (newDrinkList = JSON.parse(drinks));

		return newDrinkList;
	}

	function removeDrink(id) {
		let drinks = loadDrinks();
		let newDrinkList = drinks.filter((drink) => drink.id !== id);

		localStorage.setItem("drinks", JSON.stringify(newDrinkList));

		setStorage(JSON.stringify(newDrinkList));
	}

	return storage === undefined || JSON.parse(storage).length < 1 ? (
		<>No saved drinks</>
	) : (
		<div className="drink-container">
			<ul className="list-group">
				{JSON.parse(storage).map((key, index) => (
					<Drink key={index} item={key} removeDrink={removeDrink} />
				))}
			</ul>
		</div>
	);
}
