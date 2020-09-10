import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Home from './Home';
import Earth from './Earth';

function App() {
  const [apodData, setApod] = useState([])
  const [currentPage, changePage] = useState('home')

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=3kLuegnPiJybN95328O7GpLQ0HRb4O6yJPRZ26nL')
      .then(response => {
        console.log(response.data)
        setApod(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="sticky">
        <div>
          <img src="https://i.imgur.com/fYHjFzv.png"></img><h1>Daily Space Facts</h1>
          
        </div>

        
        <div className = "links">
        
        <a onClick={ ()=>changePage('home')}>Home</a>
        <a onClick = {()=>changePage('earth')}>Earth</a>
        </div>
      </header>
      {currentPage==='home' ? <Home explanation={apodData.explanation} title={apodData.title} hdurl={apodData.hdurl}/> : <Earth/>}
      
      
      <footer><small>© 2020 Rhea Manuel</small></footer>
    </div>
  );
}

export default App;
