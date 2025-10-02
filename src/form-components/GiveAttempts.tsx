import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, requestAttempt] = useState<number>(0);
    function addAttempts() {
        if (!isNaN(requestedAttempts)) {
            setRemainingAttempts(remainingAttempts + requestedAttempts);
        }
    }
    function useAttempt() {
        setRemainingAttempts(remainingAttempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Remaining Attempts: {remainingAttempts}</p>
            <Button disabled={remainingAttempts === 0} onClick={useAttempt}>
                Use
            </Button>
            <Form.Group>
                <Form.Label>Number of attempts requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        requestAttempt(parseInt(e.target.value) || 0);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button onClick={addAttempts}>Gain attempts</Button>
        </div>
    );
}
