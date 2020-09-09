import React, { useState, useEffect } from "react";

export default function Explanation (props){

    if (!props.explanation){
        return <div>Loading...</div>
    }

    const curText = props.explanation
    const split = curText.split('Teachers & Students')

    const newText = split[0]

    return(
        <div class="explanation">
            {newText}
        </div>
    )
}