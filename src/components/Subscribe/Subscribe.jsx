import React from 'react';
import { SubsContainer,
Title,
Text,
Subimit,
DivSubimit } from '../Subscribe/SubscribeStyle'
export default function Subscribe(){
    return(
        <SubsContainer>
        <Title>SUBSCRIBE</Title>
        <Text>Sign up for newsletter</Text>
        <input placeholder='Your Email'/>
        <DivSubimit>
        <Subimit>SUBMIT</Subimit>
        </DivSubimit>
        
        </SubsContainer>
    )
}
