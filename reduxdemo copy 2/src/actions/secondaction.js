
export const secondAction=(nameValue, myArr)=>{
    const action = {
        type:'ADD',
        payload:{name:nameValue, arr: myArr}
    }
    return action;
}
