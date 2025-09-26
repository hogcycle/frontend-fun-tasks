import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numberOfAttempts, modifyAttempts] = useState<number>(4);
    const [quizInProgress, changeQuizState] = useState<boolean>(false);
    if (quizInProgress) {
        return (
            <>
                <p>You have {numberOfAttempts} attempt(s) remaining</p>
                <Button
                    onClick={() => {
                        changeQuizState(false);
                    }}
                >
                    Stop Quiz
                </Button>
                <Button
                    disabled
                    onClick={() => {
                        modifyAttempts(numberOfAttempts - 1);
                        changeQuizState(true);
                    }}
                >
                    Start Quiz
                </Button>
                <Button
                    disabled
                    onClick={() => {
                        modifyAttempts(numberOfAttempts + 1);
                    }}
                >
                    Mulligan
                </Button>
            </>
        );
    } else {
        // quiz is not active
        return (
            <>
                <p>You have {numberOfAttempts} attempt(s) remaining</p>
                <Button
                    disabled
                    onClick={() => {
                        changeQuizState(false);
                    }}
                >
                    Stop Quiz
                </Button>
                {numberOfAttempts === 0 ?
                    <Button
                        disabled
                        onClick={() => {
                            modifyAttempts(numberOfAttempts - 1);
                            changeQuizState(true);
                        }}
                    >
                        Start Quiz
                    </Button>
                :   <Button
                        onClick={() => {
                            modifyAttempts(numberOfAttempts - 1);
                            changeQuizState(true);
                        }}
                    >
                        Start Quiz
                    </Button>
                }
                <Button
                    onClick={() => {
                        modifyAttempts(numberOfAttempts + 1);
                    }}
                >
                    Mulligan
                </Button>
            </>
        );
    }
}
