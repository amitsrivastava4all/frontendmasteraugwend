export function doAjax(url, fn){
    var http = new XMLHttpRequest();
    http.open("GET",url);
    console.log("Before Send ");
    http.send(); // Async
    console.log("After Send ",http.readyState);
    http.onreadystatechange=function(){
    console.log('States is ',http.readyState);
    if(http.readyState==4 && http.status==200){
        console.log("Result is ",http.responseText);
        fn(http.responseText);
        //return http.responseText;
        //console.log(http.responseXML);
}
}
console.log("Ajax Function Ends ");
// return undefined;
}

export function fetchDemo(url){
    console.log("Before Start ");
    var promise = fetch(url); // Async
    return promise; // return future 
}
