import React from 'react';
import PropTypes from 'prop-types';
// export const Item = (props)=>{
//     return (
//         <>
//         <p>{props.item.id} {props.item.name}</p>
//         <img src={props.item.url}/>
//         <button>Add to Cart</button>
//         </>
//     )
// }

export const Item = (props)=>{
    return (
        <>
         <p>{props.id} {props.name}</p>
         <img src={props.url}/>
         <button>Add to Cart</button>
        </>
    )
}
Item.defaultProps = {
    name:'Apple IPhone X'
}
Item.propTypes = {
    id:PropTypes.number.isRequired,
    url:PropTypes.string.isRequired
}