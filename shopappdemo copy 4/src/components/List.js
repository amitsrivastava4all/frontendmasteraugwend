import React from 'react';
import {Item} from './Item';
export const List = (props)=>{
    return (
        <div>
            {props.items.map(itemObject=><Item key={itemObject.id} item={itemObject}/>)}
        </div>
    )
}