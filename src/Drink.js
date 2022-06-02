import React from 'react';

export default function Drink(props) {

    function addOrDelBtn(id) {
        /*
        Kontrollerar om drinken i fråga finns i local storage.
        Om drinken finns i LS returneras ett button-element med onclick som tar bort den från LS,
        annars returneras ett button-element med onclick som lägger till den i LS.
        */
        let storage = localStorage.drinks;
        let newStorage;
        storage === undefined ? newStorage = [] : newStorage = JSON.parse(storage);

        if (newStorage.length === 0) {
            return <button className="btn btn-sm btn-success align-self-start" onClick={() => { props.addDrink(props.item) }}>add</button>
        } else {

            let isInStorage = false;
            for (let i = 0; i < newStorage.length; i++) {
                if (newStorage[i].id === id) {
                    isInStorage = true;
                } 
            }
            
            if (isInStorage === true) {
                return <button className="btn btn-sm btn-danger align-self-start" onClick={() => { props.removeDrink(props.item.id) }}>X</button>
            } else {
                return <button className="btn btn-sm btn-success align-self-start" onClick={() => { props.addDrink(props.item) }}>add</button>
            }
        }
    }

    return (

        <li className='list-group-item drink-list-item'>

            <img src={props.item.img} alt={'Picture of ' + props.item.name} className='rounded'></img>
            <div className='drink-info'>
                <span><b><p>{props.item.name}</p></b></span>
                <div>
                    <b>Ingredients: </b>
                    {props.item.ingredients.map((ingredient, i) => <span key={i}>{(i? ", ": "") + ingredient}</span>)}
                </div>
                <div>    
                    <b><p className='mb-0'>Instructions:</p></b>
                    {props.item.instructions}
                </div>
            </div>

            {addOrDelBtn(props.item.id)}

        </li>

    )


}
