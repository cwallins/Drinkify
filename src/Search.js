import React, { useRef, useState } from "react";
import Drink from "./Drink";
import Nav from "./Nav";

export default function Search() {
	const inputValue = useRef("");
	const [drinks, setDrinks] = useState([]);
	const [change, setChange] = useState(true);
	const clearDrinksState = () => {
		setDrinks([]);
	};

	async function getData(query, param) {
		let res = await fetch(
			`https://thecocktaildb.com/api/json/v1/1/${query}${param}`,
			{ method: "GET" }
		);
		return await res.json();
	}

	async function getDrinksByName(userInput) {
		let data = await getData("search.php?s=", userInput);
		let ingredients = [];

		let drink = data.drinks.map((drink) => {
			ingredients = [];
			// loopar drink-objektet och lägger till värdet från ingrediensnycklarna som inte är null eller tom sträng i en lista
			for (let i = 1; i < 16; i++) {
				if (
					drink[`strIngredient${i}`] !== "" &&
					drink[`strIngredient${i}`] !== null
				) {
					ingredients.push(drink[`strIngredient${i}`]);
				}
			}

			return {
				id: drink.idDrink,
				name: drink.strDrink,
				img: drink.strDrinkThumb,
				instructions: drink.strInstructions,
				ingredients: ingredients,
			};
		});

		setDrinks(drink);
	}

	function handleClick(e) {
		e.preventDefault();
		const userInput = inputValue.current.value;

		if (userInput !== "") {
			getDrinksByName(userInput);
		} else {
			alert(
				"You have to enter atleast one character in the search field"
			);
		}

		inputValue.current.value = "";
	}

	function onChange() {
		clearDrinksState();
	}

	function loadDrinks() {
		//hämtar drinkar från localstorage
		let drinks = localStorage.drinks;
		let newDrinksList;
		//om 'drinks' är undefined sparas newDrinkslist som en tom lista, annars sparas localstorage i newDrinkslist
		drinks === undefined
			? (newDrinksList = [])
			: (newDrinksList = JSON.parse(drinks));

		return newDrinksList;
	}

	function removeDrink(id) {
		let storage = loadDrinks();
		let newDrinkStorage = storage.filter((drink) => drink.id !== id);

		localStorage.setItem("drinks", JSON.stringify(newDrinkStorage));
		setChange(!change);
	}

	function addDrink(drink) {
		let storage = loadDrinks();

		storage.push(drink);

		localStorage.setItem("drinks", JSON.stringify(storage));

		setChange(!change);
	}

	return (
		<>
			<Nav onChange={onChange} />
			<div className="search-container">
				<div className="search">
					<input
						ref={inputValue}
						type="text"
						placeholder="Have a drink..."
						className="search-field"
					/>
					<button onClick={handleClick} id="button">
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 1024 1024"
							height="1.5em"
							width="1.5em"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
						</svg>
					</button>
				</div>
			</div>
			<div className="drink-container">
				<ul className="list-group">
					{drinks.map((drink) => {
						return (
							<Drink
								key={drink.id}
								item={drink}
								addDrink={addDrink}
								removeDrink={removeDrink}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
}
