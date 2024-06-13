//To create the webpage, I will be using React along with Bootstrap
import { useState } from "react";
import React from 'react';
import { Button, Form } from "react-bootstrap";

function App(){
    const [numberTest,setNumberTest] = useState<number>(0);
    function updateNumber(){
        setNumberTest(numberTest+1);
    }
    return(
        <div className="App">
            <header className="App-header">
                <p>Simple Calculator</p>
            </header>
            <p><Button onClick={updateNumber}>Random Button</Button></p>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                value={numberTest}
                />
            </Form.Group>
        </div>
    )
    
}
export default App;