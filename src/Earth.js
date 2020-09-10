import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Earth() {

    const [epicData, setEpicData] = useState([])

    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=3kLuegnPiJybN95328O7GpLQ0HRb4O6yJPRZ26nL`)
            .then(response => {
                console.log(response.data)

                setEpicData(response.data)

            })
            .catch(error => console.log(error))
    }, [])

    const earthImage = {
      backgroundImage: "url(" + epicData.url + ")",
    }

    if (!epicData.url){
        return <div>Loading</div>
    }

    return (
        <div>
            <img className="image" style={earthImage} src={epicData.url}></img>
    <div>Date Taken: {epicData.date}</div>
        </div>
    )

}