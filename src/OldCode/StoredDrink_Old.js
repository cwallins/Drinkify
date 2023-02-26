/*
import React, { useState } from 'react'
import Drink from '../Drink';


export default function StoredDrinks() {

    const [storage, setStorage] = useState(localStorage.drinks)


    function loadDrinks() {
        //hämtar drinkar från localstorage
        let drinks = localStorage.drinks;

        let newDrinksList;

        //om 'drinks' är undefined sparas newDrinkslist som en tom lista, annars sparas localstorage i newDrinkslist
        drinks === undefined ? newDrinksList = [] : newDrinksList = JSON.parse(drinks);

        return newDrinksList;
    }

    function removeDrink(id) {

        let drinks = loadDrinks();

        let newDrinksList = drinks.filter((drink) => drink.id !== id);

        localStorage.setItem("drinks", JSON.stringify(newDrinksList));
        setStorage(JSON.stringify(newDrinksList));

    }

    return storage === undefined || JSON.parse(storage).length < 1 ? (
        <div>
            No saved drinks
        </div>
    ) : (
        <div className="drink-container">
            <ul className='list-group'>
                {JSON.parse(storage).map((key, index) =>
                    <Drink key={index} item={key} removeDrink={removeDrink} />)}
            </ul>
        </div>
    )
}
*/