import React from 'react';

export default function Drink(props) {

    return (
        <div className='list-group-item'>
            {props.item.name}
        </div>
    );
}
