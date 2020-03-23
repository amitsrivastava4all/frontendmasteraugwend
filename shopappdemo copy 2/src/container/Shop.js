import React from 'react';
import {itemOperations} from '../models/itemoperations';
import {List} from '../components/List';
import {Search} from '../components/Search';
import {doAjax,fetchDemo} from '../utils/ajax';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.msg = false;
        this.state = {items:[], msg:this.msg};
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
    componentWillMount(){
        console.log('Component Will Mount Call and DO Ajax Call');
        const url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
        //doAjax(url, this.jsonResult.bind(this)); // callback fn attach
        var promise = fetchDemo(url);
        console.log("After End ",promise);
    promise.then(response=>{
    console.log("Response is ",response);
    response.json().then(data=>{
        console.log("Data is ",data);
        var arr = data['mobiles'];
        this.setState({...this.state,items:arr});
    }).catch(e=>console.log("JSON Parse Error ",e));
    }).catch(err=>{
    console.log("Error in Response ",err);
    });
        //let itemArray = itemOperations.fill();
        //this.setState({...this.state,items:itemArray});
    }
    toggleMessage(){
        this.msg = !this.msg;
        this.setState({...this.state,msg:this.msg});
    }
    render(){
        return (
            <div>
                {this.state.msg?<p>Shopping</p>:<h1>Shop Here</h1>}
                <button onClick={()=>{
                    this.toggleMessage();
                }}>Toggle</button>
                <Search/>
                <List items = {this.state.items}/>

            </div>
        )
    }
}