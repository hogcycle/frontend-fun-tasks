import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, rollDiceOne] = useState<number>(0);
    const [diceTwo, rollDiceTwo] = useState<number>(1);
    return (
        <>
            <div>
                <p>Dice 1: </p>
                <span data-testid="left-die">{diceOne} </span>
                <p>Dice 2: </p>
                <span data-testid="right-die">{diceTwo} </span>
                <br></br>
                {diceOne === 1 && diceTwo === 1 ?
                    <p>You Lose!</p>
                :   <p> </p>}
                {diceOne === diceTwo && diceOne > 1 && diceOne <= 6 ?
                    <p>You Win!</p>
                :   <p> </p>}
                <Button
                    onClick={() => {
                        rollDiceOne(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        rollDiceTwo(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
        </>
    );
}
