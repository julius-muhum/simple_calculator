//To create the webpage, I will be using React along with Bootstrap
import { useState } from "react";
import React from 'react';
import { Button, Form } from "react-bootstrap";

function App(){
    const [calculation,setCalculation] = useState<string>("");
    let newcalculation = "";
    function updateCalculation(event: React.ChangeEvent<HTMLInputElement>){
        setCalculation(event.target.value);
    }
    function findValidChars(theCalculation: string){
        for (let i = 0; i < theCalculation.length; i++){
            if (theCalculation[i] === "+" || theCalculation[i] === "-" || theCalculation[i] === "*" || theCalculation[i] === "/"
            || theCalculation[i] === "(" || theCalculation[i] === ")" || Number(theCalculation[i])){
                newcalculation += theCalculation[i]
            }
        }
    }
    function performCalculation(){
        findValidChars(calculation);
        setCalculation(eval(newcalculation));
    }
    return(
        <div className="App">
            <header className="App-header">
                <p>Simple Calculator</p>
            </header>
            <Form.Group controlId="formMovieName">
                <Form.Label>Enter Your Calculation here. Use only addition
                    subtraction, multiplication, or division.
                </Form.Label>
                <Form.Control
                value={calculation}
                onChange={updateCalculation}/>
            </Form.Group>
            <p><Button onClick={performCalculation}>Get Answer!</Button></p>
        </div>
    )
    
}
export default App;