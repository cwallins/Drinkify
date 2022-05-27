import React, { useState } from 'react'
import Drink from './Drink';


export default function StoredDrinks() {

  const [storage, setStorage] = useState({
    storageBool: localStorage.drinks
  })

  function storeDrink() {

    //min drink
    let myDrink = {
      id: 1,
      name: 'Vodka Tonic',
      ingredients: ['Vodka', 'Tonic']
    };

    let drinks = loadDrinks();

    //pushar min drink till myDrinksList
    drinks.push(myDrink);

    let jsonNewDrinks = JSON.stringify(drinks);

    //ändrar datan i localstorage till den nya listan
    localStorage.setItem("drinks", jsonNewDrinks);

    setStorage({storageBool: jsonNewDrinks});
  }
  
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

  return storage.storageBool === undefined ? (
    <div>
      No saved drinks
      <button className="btn btn-primary" type="button" onClick={storeDrink}>spara en drink</button>
    </div>
  ) : (
    <div>
      My drinks:
      <ul className='list-group'>
        {JSON.parse(storage.storageBool).map((key, index) => <Drink key={index} item={key} inStorage="yes" removeDrink={removeDrink}/>)}
      </ul>
    </div>
  )
}
