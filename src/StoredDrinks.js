import React, { useState } from 'react'
import Drink from './Drink';


export default function StoredDrinks() {

  const [storage, setStorage] = useState({
    storageBool: localStorage.drinks
  })

  function storeDrink() {

    //min drink
    let myDrink = {
      name: 'Vodka Tonic',
      ingredients: ['Vodka', 'Tonic']
    };

    //hämtar drinkar från localstorage
    let drinks = localStorage.drinks;

    let newDrinksList;

    //om 'drinks' är undefined sparas newDrinkslist som en tom lista, annars sparas localstorage i newDrinkslist
    drinks === undefined ? newDrinksList = [] : newDrinksList = JSON.parse(drinks);

    //pushar min drink till myDrinksList
    newDrinksList.push(myDrink);

    let jsonNewDrinks = JSON.stringify(newDrinksList);

    //ändrar datan i localstorage till den nya listan
    localStorage.setItem("drinks", jsonNewDrinks);

    setStorage({storageBool: jsonNewDrinks});
  }


  return storage.storageBool === undefined ? (
    <div>
      No drinks
      <button className="btn btn-primary" type="button" onClick={storeDrink}>spara en drink</button>
    </div>
  ) : (
    <div>
      My drinks:
      <div className='list-group'>
        {JSON.parse(storage.storageBool).map((key, index) => <Drink key={index} item={key}/>)}
      </div>

    </div>
  )
}
