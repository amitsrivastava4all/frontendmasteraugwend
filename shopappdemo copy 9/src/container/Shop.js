import React from 'react';
import {itemOperations} from '../models/itemoperations';
import {List} from '../components/List';
import {Search} from '../components/Search';
import {doAjax,fetchDemo} from '../utils/ajax';
import {makeAxiosCall} from '../utils/axioscall';
import axios from 'axios';
import {RefDemo} from './RefDemo';
import {LoginWithGmail} from './LoginWithGmail';
import firebase from '../utils/firebase';
export class Shop extends React.Component{
    constructor(props){
        super(props);

        this.searchValue = '';
        this.msg = false;
        this.counter = 1;
        this.interval = undefined;
        this.state = {items:[], msg:this.msg,userInfo:{}};
        console.log('Constructor call');
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                    console.log('User Logged In ',user);
                    this.setState({...this.state,userInfo:{name:user.displayName, photo:user.photoURL, email:user.email}})
            }
            else{
                console.log('User Logged Out');
            }
        })
    }
    jsonResult(json){
        console.log('JSON Rec in Shop Component ',typeof json);
        try{
        var object = JSON.parse(json);
        }
        catch(e){
            console.log('JSON Cant parse ',e);
        }
        console.log("Object is ",object, " ",typeof object);
        var arr = object['mobiles'];
        this.setState({...this.state,items:arr});
    }
    // static getDerivedStateFromProps(props, state){
    //     console.log('GetDerived State from Props call ',props, state);
    //     // State Manipluation
    //     return state;
    // }
    takeInput(event){
            this.searchValue = event.target.value;
    }
    componentWillMount(){
        console.log('******* Component Will Mount Call and DO Ajax Call');
        //const url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
        const url = "/mobiles.json";
        //doAjax(url, this.jsonResult.bind(this)); // callback fn attach
        //var promise = fetchDemo(url);
        var promise = makeAxiosCall(url);
        var promise2 = makeAxiosCall(url);
        var promise3 = makeAxiosCall(url);
        axios.all([promise,promise2,promise3]).then(arr=>{
            console.log('All Promise Result is ',arr);
        })
       // console.log("After End ",promise);
        promise.then(response=>{
            console.log('Axios Result is ',response.data['mobiles']);
            var arr = response.data['mobiles'];
            //delete localStorage.tokenId;
         this.setState({...this.state,items:arr});
        }).catch(err=>{
            console.log('Error is ',err);
        })
    // promise.then(response=>{ // Success
    // console.log("Response is ",response);
    // response.json().then(data=>{
    //     console.log("Data is ",data);
    //     var arr = data['mobiles'];
    //     this.setState({...this.state,items:arr});
    // }).catch(e=>console.log("JSON Parse Error ",e));
    // }).catch(err=>{  // fail
    // console.log("Error in Response ",err);
    // });
        //let itemArray = itemOperations.fill();
        //this.setState({...this.state,items:itemArray});
    }
    toggleMessage(){
        this.msg = !this.msg;
        this.setState({...this.state,msg:this.msg});
    }
    render(){
        console.log("Render Call ");
       // x1++;
        return (
            <div>
                <LoginWithGmail/>
                <h3>Name is {this.state.userInfo.name} Email is {this.state.userInfo.email}</h3>
                <img src={this.state.userInfo.photo}/>  
                <br/>
                <h1>CRUD Operation in DB</h1>
                <RefDemo/>
                <hr/>

                <br/>

                {this.state.msg?<p>Shopping</p>:<h1>Shop Here</h1>}
                <button onClick={()=>{
                    this.toggleMessage();
                }}>Toggle</button>
                <Search takeInput = {this.takeInput.bind(this)}/>
                <List items = {this.state.items}/>

            </div>
        )
    }
    componentDidMount(){
        this. interval = setInterval(()=>{
                //console.log('Set Interval Call ',this.counter);
                this.counter++;
        },4000);
        console.log('Did Mount Call');
    }
    componentShouldUpdate(nextProps, nextState){
        if(this.state.counter == nextState.counter){
            return false;
        }
        return true;
    }
    componentWillUnmount(){
        console.log('UnMount Call');
        clearInterval(this.interval);
    }
}