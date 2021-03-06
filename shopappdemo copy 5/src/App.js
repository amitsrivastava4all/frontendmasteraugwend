import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Shop } from './container/Shop';

class App extends React.Component {
  constructor(){
    super();
    this.count = 100;
    this.state = {counter:this.count};
  }
  changeX(){
        this.count++;
        this.setState ({counter:this.count});
  }
  render(){
  
  var jsx = this.state.counter==100?<Shop/>:<h1>No Shop Loaded</h1>
  return (
    <div>
    <button onClick={this.changeX.bind(this)}>COUNTDOWN</button>
    {jsx}
    </div>
  );
  }
}

export default App;
