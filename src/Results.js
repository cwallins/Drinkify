// import React from 'react';

export default function Results(searchStr, searchChoice) {
    // searchStr : str, searchChoice : str (s=, f=, i=)
    const searchUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?';
    const get = { method: 'GET' };
    const searchSt = 'mar';
    const searchCoic = 'byName';

    function searchByName() {
        fetch(`${searchUrl}s=${searchSt}`, get)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    // byIngredient www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
    // give me random www.thecocktaildb.com/api/json/v1/1/random.php
    // Lookup full cocktail details by id www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
    if (searchCoic === 'byName') {
        searchByName();
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