import React, { useState, useCallback, useEffect } from 'react'
import Drink from './Drink';


export default function StoredDrinks() {
  const [storage, setStorage] = useState([]); // tom lista istället 

  // istället för att starta med localstorage.drink, ta useEffect 
  // för att hämta datan i localstorage.drink 
  useEffect(() => {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    setStorage(drinks);
  }, []);

  // useCallback för att minnas removeDrink funktionen
  // tror detta tar bort re-renders i bakgrunden med 
  const removeDrink = useCallback((id) => {
    const newDrinksList = storage.filter((drink) => drink.id !== id);

    localStorage.setItem('drinks', JSON.stringify(newDrinksList));
    setStorage(newDrinksList);
  }, [storage]); // passa in storage i listan


  // istället för att parsa storage flera gånger eller kolla om den är 
  // längre än 1 så kan man köra conditional rendering i returen 
  return (
    <React.Fragment>
      <div className="drink-container">
        {storage.length > 0 ? ( // conditional render 
          <ul className="list-group">
            {storage.map((drink) => (
              <Drink key={drink.id} item={drink} removeDrink={removeDrink} />
            ))}
          </ul>
        ) : ( // om storage är tomt 
          <div>No saved drinks</div>
        )}
      </div>
    </React.Fragment>
  );
}


