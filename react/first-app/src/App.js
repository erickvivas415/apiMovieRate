import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


function createAlert() {
  alert("Hello!");
}



function App() {
  return (
    <div className="App">
      <Header info="This is my message"
        myNumber="6"/>
      <Header info="This is my message 2"
        myNumber="6"/>
      <p>Main content</p>
      <Footer trademark="Page by @erickvivas"
      myAlert={createAlert}/>
    </div>
  );
}

export default App;
