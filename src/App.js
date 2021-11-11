import React, {useState, useEffect} from 'react';
import './App.css';
import Gif from './Components/Gif';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <h1>Giphy</h1>
      <br />
      <Button />
      <br />
      <h2>Use Giphy to pull some giphs</h2>
      <Gif />
    </div>
  );
}

export default App;
