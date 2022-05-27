import React, { useState } from 'react';
import Drink from './Drink';

// Results tar emot userChoice: str, userInput: str
export default function Results(props) {
    let userInput = props.item;
    const [resp, setResp] = useState({
        resp: []
    });

    // URL:er för olika resurser
    const searchURL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
    const filterURL = 'https://thecocktaildb.com/api/json/v1/1/filter.php?i=';
    const lookupURL = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const randomURL = 'https://thecocktaildb.com/api/json/v1/1/random.php';
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
    async function getData(raq, p) {
        // raq: resource and query, p: parameter
        let res = await fetch(`https://thecocktaildb.com/api/json/v1/1/${raq}${p}`, { method: 'GET' });
        return await res.json();
    }

    async function getDrinksByName(userInput) {
        let data = await getData('search.php?s=', userInput);

        let drink = data.drinks.map((drink) => {
            return {
                id: `${drink.idDrink}`,
                name: `${drink.strDrink}`,
                img: `${drink.strDrinkThumb}`,
                instructions: `${drink.strInstructions}`
            }
        });
        return drink;
    }

    const drinks = [];

    if (searchChoic === 'byName') {
        // Sök efter drinkar baserat på namn
        async function test() {
            let drinkList = await getDrinksByName('Margarita')
            drinkList.map((drink) => {
                drinks.push(drink);
            });
            setResp(resp.resp = drinks);
        }
        test();
        
    } else if (searchChoic === 'byIngredient') {
        // Sök efter drinkar baserat på ingrediens
    } else if (searchChoic === 'byId') {
        // Sök efter specifik drink baserat på id
    } else if (searchChoic === 'getRandom') {
        // Sök efter en drink baserat på slumpen
    } else {
        console.log('Search option was not entered');
    }

    return (
        <div>
            <ul>
                Hej
                {resp.resp.map((drink, i) => <Drink key={i} item={drink} />)}
            </ul>
        </div>
    );
}