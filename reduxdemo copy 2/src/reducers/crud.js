const initialState = {
    msg:'I am the default Value',
    name:''

};
export const reducer = (state = initialState, action)=>{
    //var newState  = {};
if(action.type=='SEND'){
    var newState= {...state,name:action.payload.name};
    return newState;
}
return state;
}