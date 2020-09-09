import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Explanation from './Explanation';

function App() {
  const [apodData, setApod] = useState([])
  // API KEY: 3kLuegnPiJybN95328O7GpLQ0HRb4O6yJPRZ26nL
  // URL for requests: https://api.nasa.gov/planetary/apod?api_key=3kLuegnPiJybN95328O7GpLQ0HRb4O6yJPRZ26nL
  // Account Email: rheamanuel02@gmail.com
  // Account ID: c598c0c9-c3a0-4744-957e-cdcc33f8257c

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=3kLuegnPiJybN95328O7GpLQ0HRb4O6yJPRZ26nL')
      .then(response => {
        console.log(response.data)
        // console.log(response.data.explanation)
        setApod(response.data)
        // console.log(apodData)
      })
      .catch(error => console.log(error))
  }, [])

  const apodImage = {
    backgroundImage: "url(" + apodData.hdurl + ")",
    height: '90vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  // let expl = apodData.explanation
  // const split = expl.split('Teachers & Students')
  // explanation = split[0]

  // const apodImage = ({hdurl}) => {

  //   return (
  //     <img src= {hdurl}></img>
  //   )

  // }

  return (
    <div className="App">
      <header className="sticky"><img src="https://i.imgur.com/fYHjFzv.png"></img><h1>Daily Space Facts</h1></header>
      <section className="App-header">
        <h2>{apodData.title}</h2>
        <div style={apodImage}></div>
        {/* <img src = {apodData.hdurl}></img> */}
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Explanation explanation={apodData.explanation}/>
      {/* <div class="explanation">{apodData.explanation}</div> */}

      </section>
    </div>
  );
}

export default App;
