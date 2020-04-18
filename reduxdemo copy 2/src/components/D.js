import React from 'react';
import {connect} from 'react-redux';
export const D=(props)=> {
    return (
        <div>
                <h1>I am in D Component</h1>
                <h2>Data Rec From A {props.data} and Second is {props.second} </h2>
                <p>{props.x}</p>
                <p>Array is {props.arr.map(ele=><span key={ele}>{ele}</span>)}</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(' Map State to Props Call ',state);
    return {
        data: state.reducer.name,
        second:state.secondReducer.name,
        x:state.msg,
        arr:[...state.secondReducer.arr]
    }
    
}

//export default D;
const fnContainsStateProps = connect(mapStateToProps);
export default fnContainsStateProps(D);