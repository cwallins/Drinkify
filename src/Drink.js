import React from 'react'

export default function Drink(props) {
    
    return props.inStorage === "yes" ?(
        <li className='list-group-item'>
            {props.item.name}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.removeDrink(props.item.id)}}>X</button>
        </li>
    ):
    (
        <li>
            ....for drinks not in storage

        </li>
    )
    
}
