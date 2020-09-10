import React from "react";
import {Image, Section, StyledExplanation} from './Elements'

export default function Explanation (props){

    if (!props.explanation){
        return <div>Loading...</div>
    }

    const curText = props.explanation
    const split = curText.split('Teachers & Students')

    const newText = split[0]

    return(
        <div>
          <Section>
            <h2>{props.title}</h2>
            <Image hdurl={props.hdurl}></Image>
            <StyledExplanation>
                {newText}
            </StyledExplanation>
          </Section>
        </div>
        
    )
}