import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import image from "./assets/image.jpg";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1 className="banner" style={{ background: "blue" }}>
                <span style={{ color: "blue" }}>CISC275</span>
            </h1>
            <h1 role="banner">Hello Shooters</h1>
            <img src={image} alt="up Connector"></img>
            <ul>
                <li>Use</li>
                <li>Your</li>
                <li>Imagination</li>
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
                        <Col>Terrible</Col>
                        <Col>Excellence</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
