import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState(options[0]);
    function changeChoice(e: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(e.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Answers</Form.Label>
                <Form.Select value={currentChoice} onChange={changeChoice}>
                    {options.map((option: string, index: number) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{currentChoice === expectedAnswer ? "✔️" : "❌"} </div>
        </div>
    );
}
