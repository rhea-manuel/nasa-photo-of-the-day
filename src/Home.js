import React, { useState, useEffect } from "react";

export default function Explanation (props){

    if (!props.explanation){
        return <div>Loading...</div>
    }

    const curText = props.explanation
    const split = curText.split('Teachers & Students')

    const newText = split[0]

    const apodImage = {
      backgroundImage: "url(" + props.hdurl + ")",
    }

    return(
        <div id="homePage">

          <section className="App-header">
            <h2>{props.title}</h2>
            <div className="image" style={apodImage}></div>

            <div className="explanation">
                {newText}
            </div>
          </section>
        </div>
        
    )
}