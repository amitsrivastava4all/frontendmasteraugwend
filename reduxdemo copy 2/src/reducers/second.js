const initialState = {
    msg:'I am the Second Reducer Value',
    name:'',
    arr:[]

};
export const secondReducer = (state = initialState, action)=>{
    //var newState  = {};
if(action.type=='ADD'){
    var newState= {...state,name:action.payload.name, arr:action.payload.arr};
    return newState;
}
return state;
}