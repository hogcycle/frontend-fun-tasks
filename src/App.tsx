import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import image from "./assets/image.jpg";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1 className="banner" style={{ background: "blue" }}>
                <span style={{ color: "blue" }}>CISC275</span>
            </h1>
            <h1 role="banner">Hello Everyone</h1>
            <img src={image} alt="up Connector"></img>
            <ul>
                <li>Pineal gland</li>
                <li>Drain plug</li>
                <li>Lead pipe</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div style={{ backgroundColor: "red", width: 500, height: 50 }}>
                <Container>
                    <Row>
                        <Col>Yang</Col>
                        <Col>Teng</Col>
                    </Row>
                </Container>
            </div>
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
