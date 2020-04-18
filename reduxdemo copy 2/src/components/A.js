import React ,{useRef} from 'react';
import {actionFiller} from '../actions/action';
import {secondAction} from '../actions/secondaction';
import {store} from '../store/commonstore';
import B from './B';
var counter = 1;
var arr = [];
export const A=()=> {
    var name = useRef();
   
    
    const send=()=>{
        var nameValue = name.current.value;
        console.log('Name is in A Component ',nameValue);
        const action = actionFiller(nameValue);
         store.dispatch(action);
    }
    const send2=()=>{
        arr.push(counter);
        counter++;
        console.log('Send2 Arr  ',arr, 'Counter ',counter);

        var nameValue = name.current.value.toUpperCase();
        console.log('Name is in A Component ',nameValue);
        const action = secondAction(nameValue,arr);
         store.dispatch(action);
    }
    return (
        <div>
            <input type='text' ref={name}/>
            <button onClick={send}>Send Name to D</button>
            <button onClick={send2}>Send Second Action Name to D</button>
                <B/>
        </div>
    )
}

export default A;
