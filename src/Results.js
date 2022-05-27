// import React from 'react';
// import Drink from './Drinks';

// Results tar emot userChoice: str, userInput: str
export default function Results(userChoice, userInput) {
    // URL:er för olika resurser
    const searchURL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
    const filterURL = 'https://thecocktaildb.com/api/json/v1/1/filter.php?i=';
    const lookupURL = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const randomURL = 'https://thecocktaildb.com/api/json/v1/1/random.php';
    const get = { method: 'GET' }; // används evenetuellt enbart en gång... 
    const searchSt = 'mar';
    const searchChoic = 'byName';
    const id = '11007';
    const rand = 'random';
    /* 
        1. Hämta data från API
        2. Rensa json-data till korrekt format
            2a. loopa genom ingredient för att få ut rätt, samt mängd
            2b. spara data i json format i ny lista
            2c. drink = {
                name: "str", strDrink
                id: int, idDrink
                ingredients: [
                    str,
                    str,
                    str
                ],
                img: "url", strDrinkThumb
                instructions: "str", strInstructions
            }
        3. nyLista.map med komonenten drink (props; )
    */
    async function search(url, input) {
        try {
            let response = await fetch(`${url}${input}`, get);
            let data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    /* 
    async function renderDrinks(url, input) {
        let drinks = await search(url, input);
        let html = '';
        console.log(drinks);

        drinks.map(drink => {
            let htmlSeg = 
                `
                <div className='drink'>
                    <h3>${drink.strDrink}</h3>
                    <img src='${drink.strDrinkThumb}'>
                </div>
                `
        })
    }
    */

    if (searchChoic === 'byName') {
        // Sök efter drinkar baserat på namn
        search(searchURL, searchSt);
    } else if (searchChoic === 'byIngredient') {
        // Sök efter drinkar baserat på ingrediens
        search(filterURL, searchSt);
    } else if (searchChoic === 'byId') {
        // Sök efter specifik drink baserat på id
        search(lookupURL, id);
    } else if (searchChoic === 'getRandom') {
        // Sök efter en drink baserat på slumpen
        search(randomURL, rand);
    } else {
        console.log('Search option was not entered');
    }

    return (
        <div>
            <ul>
            </ul>
        </div>
    );
}