import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Image, Section, StyledExplanation} from './Elements';

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

    if (!epicData.url) {
        return <div>Loading</div>
    }

    return (
        <div>
            <Image hdurl={epicData.url}></Image>
            <div>Date Taken: {epicData.date}</div>
        </div>
    )

}