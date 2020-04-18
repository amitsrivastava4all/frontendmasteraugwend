
export const actionFiller=(nameValue)=>{
    const action = {
        type:'SEND',
        payload:{name:nameValue}
    }
    return action;
}
