export const LoggerMiddleWare = (store)=>{
    console.log("I am Inside Middleware");
    return next=>{
        let startTime = Date.now();
        console.log('Next Is Called ',startTime);
        return action =>{
            // Axios Call
              const result = next(action);  
              let endTime = Date.now();
              console.log('total time taken ',(endTime-startTime));
            return result;
            }
    }
}