import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [currAnswer, setCurrAnswer] = useState("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={currAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{currAnswer === expectedAnswer ? "✔️" : "❌"} </div>
        </div>
    );
}
