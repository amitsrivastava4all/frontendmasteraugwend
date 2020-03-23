import React from 'react';
export const Item = (props)=>{
    return (
        <>
        <p>{props.item.id} {props.item.name}</p>
        <img src={props.item.url}/>
        <button>Add to Cart</button>
        </>
    )
}