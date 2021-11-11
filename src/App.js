import React, {useState, useEffect} from 'react';
import './App.css';
import Gif from './Components/Gif';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <h1>Giphy</h1>
      <input placeholder="type of giphy"/>
      <button>Submit</button>
      <br/>
      <Button />
      <Gif />
    </div>
  );
}

export default App;
