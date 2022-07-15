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

  const userlogin = true;
    return (
      <div className="App">
        <Header info="This is my message"/>
        <p>Main content</p>
        <Footer trademark="Page by @erickvivas"
          myAlert={createAlert}/>
      </div>
      );
}

export default App;
