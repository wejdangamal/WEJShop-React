import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react';
import  { Component } from 'react';
import { render } from 'react-dom';
import Footer from './component/Footer';
import Body from './component/Body'
class App extends Component{
 render(){  
  return (
    <div className="App">
     <Body/>
     <Footer/>
    </div>
  )
}
}
export default App;