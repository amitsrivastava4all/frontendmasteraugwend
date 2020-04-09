import React,{ Component } from "react";
import dbOperations from '../db/crud';
export class RefDemo extends Component{
  
    constructor(){
        super();
        this.state = {msg:''};

    }
    fetchAllRecords(){
       var pr =  dbOperations.getAllRecords();
       pr.then(querySnapShot=>{
            querySnapShot.forEach((doc)=>{
                console.log('Doc is ',doc.data(), ' ID ',doc.id);
            })
       }).catch(err=>{
           console.log('Error is in Fetch ',err);
       })
    }
    // this will take input of all textboxes
    saveInfo(){
            console.log('Ref is ',this.refs, 'Type of ',typeof this.refs);
            var object = {};
            for(let key in this.refs){
                object[key] = this.refs[key].value;
            }
            console.log('Object ',object);
            var pr =dbOperations.add(object);
            pr.then(data=>{
                this.setState({msg:'Record Added in DB'});
            }).catch(err=>{
                console.log('Add Error ',err);
                this.setState({msg:'Error in Addition of a Record in DB'});
            })
            // var result = '';
            // for(let key in object){
            //     result += `${key} ${object[key]}`;
            // }

            //this.setState({msg:result});
            // var name = this.refs.name.value;
            // var salary = this.refs.salary.value;
            // var city = this.refs.city.value;
            // var phone = this.refs.phone.value;
            //var result = `Name is ${name} Salary is ${salary} City is ${city} and Phone is ${phone}`;
            //this.setState({msg:result});

    }
  render(){
    return (
        // We create 4 text boxes and assign 4 refs
        <div>
            <h1>Register Form</h1>
            <p>{this.state.msg}</p>    
            <input type='text' ref="name" placeholder="Type Your Name"/>
            <br/>
            <input type='text' ref="salary" placeholder="Type Your Salary"/>
            <br/>
            <input type='text' ref="city" placeholder="Type Your City"/>
            <br/>
            <input type='text' ref="phone" placeholder="Type Your Phone"/>
            <br/>
            <button onClick={this.saveInfo.bind(this)}>Register</button>
            <button onClick={this.fetchAllRecords.bind(this)}>FetchAll</button>
            <button >Delete</button>
            <button >Update</button>
        </div>
    )
  }  
}