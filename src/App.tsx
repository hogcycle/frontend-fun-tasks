import React from "react";
// import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
// import { ChangeType } from "./components/ChangeType";
// import { RevealAnswer } from "./components/RevealAnswer";
// import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
// import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { DoubleHalf } from "./bad-components/DoubleHalf";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            {/* <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <CycleHoliday></CycleHoliday> */}
        </div>
    );
}

export default App;
