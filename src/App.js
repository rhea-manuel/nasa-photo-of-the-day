import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Home from './Home';
import Earth from './Earth';

import styled from 'styled-components';
import {StyledApp, Header, Links, Logo, Footer} from './Elements';

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

  function openGithub(){
    window.open("https://github.com/rhea-manuel", "_blank")
  }

  return (
    <StyledApp>
      <Header>
        <Logo onClick = { ()=> openGithub() }>
          <img src="https://i.imgur.com/fYHjFzv.png"></img><h1>Daily Space Facts</h1>
          
        </Logo>

        
        <Links>
        
        <a onClick={ ()=>changePage('home')}>Home</a>
        <a onClick = {()=>changePage('earth')}>Earth</a>
        </Links>
      </Header>
      {currentPage==='home' ? <Home explanation={apodData.explanation} title={apodData.title} hdurl={apodData.hdurl}/> : <Earth/>}
      
      
      <Footer><small>© 2020 Rhea Manuel</small></Footer>
    </StyledApp>
  );
}

export default App;
