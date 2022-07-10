import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


function createAlert() {
  alert("Hello!");
}

function ShowMessage(props) {
  if (props.toShow) {
    return <h2>My Message</h2>;
  } else {
    return <h2>Forbidden</h2>;
  }

  
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
        <ShowMessage toShow={false}/>
    </div>
  );
}

export default App;
