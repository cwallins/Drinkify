import React from 'react';

export default function Drink(props) {
    console.log('Hej');
    return (
        <div className='list-group-item'>
            {props.item.name}
        </div>
    );
}
