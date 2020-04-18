import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './ui/header';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
function App() {
  return (
    <div>
    <h1>SPA Demo</h1>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name/:job" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/xyz" render={()=><h1>XYZ </h1>}/>
      
    </Switch>

    </div>
  );
}

export default App;
