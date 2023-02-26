import React, { useRef, useState, useCallback, useEffect } from 'react'
import Drink from './Drink';
import Nav from './Nav';

export default function Search() {

  const inputValue = useRef("");                                  // Saves the value of the input element
  const [drinks, setDrinks] = useState([]);                       // Saves the api-result
  const [storage, setStorage] = useState([]);
  const [change, setChange] = useState(true);
  const baseUrl = 'https://thecocktaildb.com/api/json/v1/1/';     // Store url in variable 

  const clearDrinksState = () => {
    setDrinks([]);
  };

  function onChange() {
    clearDrinksState();
  }

  // instead of starting with localstorage.drink in the state we use
  // useEffect to retrieve the data from localstorage.drink
  useEffect(() => {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    setStorage(drinks);
  }, []);

  // We can use useCallback to remember the removeDrink
  // function. This removes re-renders in the background.
  const removeDrink = useCallback((id) => {
    const newDrinksList = storage.filter((drink) => drink.id !== id);

    localStorage.setItem('drinks', JSON.stringify(newDrinksList));
    setStorage(newDrinksList);
  }, [storage]);

  // Fetch data from api and throw an error if the data can't be fetched. 
  async function getData(resourceQuery, p) {
    try {
      const url = `${baseUrl}${resourceQuery}${p}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Instead of using a for loop to iterate through the strIngredient properties, 
  // we can use the Object.entries() method to loop through all the properties of the object 
  // and filter out the ones that are not ingredients.
  async function getDrinksByName(userInput) {
    const data = await getData('search.php?s=', userInput);
    const drinks = data.drinks.map(drink => {
      // We can use destructuring to extract the relevant properties 
      // from the drink object instead of accessing them using bracket notation.
      const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink;

      const ingredients = Object.entries(drink)
        .filter(([key, value]) => key.startsWith('strIngredient') && value)
        .map(([key, value]) => value);

      return { id: idDrink, name: strDrink, img: strDrinkThumb, instructions: strInstructions, ingredients };
    });

    setDrinks(drinks);
  };

  function handleClick(e) {
    e.preventDefault();
    const userInput = inputValue.current.value;

    if (userInput !== "") {
      getDrinksByName(userInput);
    } else {
      alert('You have to enter atleast one character in the search field');
    }
    inputValue.current.value = '';
  }

  function addDrink(drink) {
    storage.push(drink);
    localStorage.setItem("drinks", JSON.stringify(storage));
    setChange(!change);
  }

  return (
    <React.Fragment>
      <Nav onChange={onChange} />
      <div className="search-container">
        <div className="search">
          <input ref={inputValue} type="text" placeholder="Have a drink..." className="search-field" />
          <button onClick={handleClick} id="button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></button>
        </div>
      </div>
      <div className="drink-container">
        <ul className="list-group">
          {drinks.map((drink) => {
            return <Drink key={drink.id} item={drink} addDrink={addDrink} removeDrink={removeDrink} />;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
