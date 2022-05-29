import React from 'react'

export default function Drink(props) {
    
    function addOrDelBtn(id) {
        /*
        Kontrollerar om drinken i fråga finns i local storage.
        Om drinken finns i LS returneras ett button-element med onclick som tar bort den från LS,
        annars returneras ett button-element med onclick som lägger till den i LS.
        */

        let storage = JSON.parse(localStorage.drinks);
        
        for (var i=0; i<storage.length; i++){
            if(storage[i].id === id){
                return <button className="btn btn-sm btn-danger align-self-start" onClick={() => {props.removeDrink(props.item.id)}}>X</button>
            } else{
                return <button className="btn btn-sm btn-success align-self-start">add</button>
            }
        }
    }

    return (
        <li className='list-group-item drink-list-item'>
         
            <img src="https://via.placeholder.com/300" alt="placeholder"className='rounded'></img>
            
            <div className='drink-info'>
                <span>{props.item.name}</span>

                <div>
                    Ingredients: 
                    {props.item.ingredients.map((ingredient, i) => <span key={i}>{ (i ? ', ' : ' ') + ingredient}</span>)}
                </div>
            </div>
     
            {addOrDelBtn(props.item.id)}
        </li>
    )
}
