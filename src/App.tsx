//To create the webpage, I will be using React along with Bootstrap
import { useState } from "react";
import React from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";
import './App.css';

function App(){
    //const img = require('./calculatorimage.jpg');
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
            <div className="App-header">
                <Row>
                    <Col><p>Simple Calculator: A free online (and simple) source</p></Col>
                    <Col> </Col>
                    <Col><p>Julius Muhumuza julius.muhum@gmail.com</p></Col>
                </Row>
            </div>
            <div className = "App-body">
            <Row>
            <Col>
            <div className="App-textbox"><Form.Label>Enter Your Calculation here. Use only addition subtraction, multiplication, or division. </Form.Label></div>
            <div className="App-textbox"> <Form.Group controlId="formMovieName"> <Form.Control value={calculation} onChange={updateCalculation}/> </Form.Group> </div>
            <p><Button onClick={performCalculation}>Get Answer!</Button></p></Col>
            <Col><img src = "calculatorimage.jpg"/></Col>
            </Row>
            </div>
        </div>
    )
    
}
export default App;