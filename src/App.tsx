import React from "react";
// import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
//import { TwoDice } from "./components/TwoDice";
//import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { StartAttempt } from "./components/StartAttempt";

function App(): React.JSX.Element {
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
            <ChangeType></ChangeType>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            {/* <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <CycleHoliday></CycleHoliday> */}
        </div>
    );
}

export default App;
