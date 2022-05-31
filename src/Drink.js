import React from 'react';

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
         
            <img src={props.item.img} alt={'Picture of ' + props.item.name} className='rounded'></img>
            <div className='drink-info'>
                <span>{props.item.name}</span>
                <div>
                    <b><p>Instructions:</p></b>
                    {props.item.instructions}
                </div>
            </div>
     
            {addOrDelBtn(props.item.id)}

        </li>

    )


}
