import React from 'react'

export default function Drink(props) {
    
    function inStorage(id) {
        /*
        Kontrollerar om drinken i fråga finns i local storage
        */

        let storage = JSON.parse(localStorage.drinks);
        
        for (var i=0; i<storage.length; i++){
            if(storage[i].id === id){
                return true
            } else{
                return false
            }
        }
    }

    //Om objektet finns i local storage så kommer knappens onClick ta bort objektet
    //Om objektet inte finns i local storage så kommer knappen onClick lägga till objektet
    return inStorage(props.item.id) === true ?(
        <li className='list-group-item'>
            {props.item.name}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.removeDrink(props.item.id)}}>X</button>
        </li>
    ):
    (
        <li className='list-group-item'>
            {props.item.name}
            <button className="btn btn-sm btn-danger float-end">add to storage</button> 
        </li>
    )
    
}
