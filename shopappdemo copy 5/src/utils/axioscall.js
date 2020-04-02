import axios from 'axios';
//axios.defaults.baseURL = 'http://localhost:1234';
axios.defaults.baseURL='https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master';
axios.defaults.headers.get['Content-Type']='application/json';
const myInterceptor = axios.interceptors.request.use(request=>{
    console.log('Request Interceptor Invoked ',localStorage.tokenNumber);
    //request.tokenId = 'A123456';

    request.tokenId = localStorage.tokenNumber;
    return request;
});

axios.interceptors.response.use(response=>{
    console.log('Response Interceptor Invoked ',response);
    response.data['mobiles'][0].id = 999999;
    return response;
});
setTimeout(()=>{
axios.interceptors.request.eject(myInterceptor);
},9000);
export function makeAxiosCall(url){
    const options = {
        //method:'GET',
        //url:url,
        //timeout:3000,
        maxContentLength:4000
        // data:{
        //     firstName:'Brain',
        //     lastName:'Mentors'
        // }
    };
    console.log('*********************Axios is  Type ',typeof axios);
//var promise = axios(options);
var axiosMyObject = axios.create({baseURL:'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master'
, timeout:4000});
var promise  = axiosMyObject.get(url,options);
//var promise = axios.get(url,options);  // axios.post()
return promise;
}
