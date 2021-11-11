import React, {useState, useEffect} from 'react';
import './App.css';
import Gif from './Components/Gif';
import Button from './Components/Button';

function App(props) {

  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.giphy.com/v1/gifs/random?api_key=YwpCRt35hzewLXvKfvWvt7hMxG6lQS4w&tag=&rating=pg')
      .then((response) => response.json())
      .then((gifs) => setData(gifs.data.id));
  },[])

  console.log(data);

  let gifurl = "https://i.giphy.com/media/"+data+"/giphy.webp";

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button />
      <br />
      <h2>Use Giphy to pull some giphs</h2>
      <img src={gifurl} />
      <Gif />
    </div>
  );
}

export default App;
